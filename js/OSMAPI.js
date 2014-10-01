
Brick.OSMAPI = function(auth) {

  var
    url = 'http://www.openstreetmap.org',
    inflight = {},
    loadedTiles = {},
    tileZoom = 16,
    oauth = auth,
    off;

  var parsers = {
    node: function(node) {
      var attr = node.attributes;
      return new Brick.Node({
        id: attr.id.value,
        lat: attr.lat.value,
        lon: attr.lon.value,
        version: attr.version.value,
        user: attr.user && attr.user.value,
        tags: getTags(node)
      });
    },

    way: function(node) {
      var attr = node.attributes;
      return new Brick.Way({
        id: attr.id.value,
        version: attr.version.value,
        user: attr.user && attr.user.value,
        tags: getTags(node),
        nodes: getNodes(node)
      });
    },

    relation: function(node) {
      var attr = node.attributes;
      return new Brick.Relation({
        id: attr.id.value,
        version: attr.version.value,
        user: attr.user && attr.user.value,
        tags: getTags(node),
        members: getMembers(node)
      });
    }
  };

  function parseEntity(xml) {
    if (!xml || !xml.childNodes) {
      return;
    }

    var
      root = xml.firstChild,
      children = root.childNodes,
      entities = [],
      child,
      parser;

    for (var i = 0, il = children.length; i < il; i++) {
      child = children[i];
      if ((parser = parsers[child.nodeName])) {
        entities.push(parser(child));
      }
    }

    return entities;
  }

  function getTags(node) {
    var
      tags = node.getElementsByTagName('tag'),
      attr,
      res = {};
    for (var i = 0, il = tags.length; i < il; i++) {
      attr = tags[i].attributes;
      res[attr.k.value] = attr.v.value;
    }
    return res;
  }

  function getNodes(node) {
    var
      nodes = node.getElementsByTagName('nd'),
      res = new Array(nodes.length);
    for (var i = 0, il = nodes.length; i < il; i++) {
      res[i] = nodes[i].attributes.ref.value;
    }
    return res;
  }

  function getMembers(node) {
    var
      members = node.getElementsByTagName('member'),
      attr,
      res = new Array(members.length);
    for (var i = 0, il = members.length; i < il; i++) {
      attr = members[i].attributes;
      res[i] = {
        id: attr.ref.value,
        type: attr.type.value,
        role: attr.role.value
      };
    }
    return res;
  }

  var proto = {};

  proto.loadEntity = function(type, id, callback, scope) {
    loadXML(url +'/api/0.6/'+ type +'/'+ id + (type !== 'node' ? '/full' : ''), function(xml) {
      if (callback) {
        callback.call(scope, parseEntity(xml));
      }
    });
  };





















  proto.changesetURL = function(changesetId) {
    return url + '/changeset/' + changesetId;
  };

  proto.changesetsURL = function(center, zoom) {
    var precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));
    return url + '/history#map=' +
      Math.floor(zoom) + '/' +
      center[1].toFixed(precision) + '/' +
      center[0].toFixed(precision);
  };

  proto.entityURL = function(entity) {
    return url + '/' + entity.type + '/' + entity.osmId();
  };

  proto.userURL = function(username) {
    return url + '/user/' + username;
  };

  proto.loadFromURL = function(url, callback) {
    return xml(url, function(dom) {
      return callback(null, parseEntity(dom));
    });
  };



  // Generate Changeset XML. Returns a string.
  proto.changesetJXON = function(tags) {
    return {
      osm: {
        changeset: {
          tag: _.map(tags, function(value, key) {
            return { '@k': key, '@v': value };
          }),
          '@version': 0.3,
          '@generator': 'iD'
        }
      }
    };
  };

  // Generate [osmChange](http://wiki.openstreetmap.org/wiki/OsmChange)
  // XML. Returns a string.
  proto.osmChangeJXON = function(changeset_id, changes) {
    function nest(x, order) {
      var groups = {};
      for (var i = 0; i < x.length; i++) {
        var tagName = Object.keys(x[i])[0];
        if (!groups[tagName]) groups[tagName] = [];
        groups[tagName].push(x[i][tagName]);
      }
      var ordered = {};
      order.forEach(function(o) {
        if (groups[o]) ordered[o] = groups[o];
      });
      return ordered;
    }

    function rep(entity) {
      return entity.asJXON(changeset_id);
    }

    return {
      osmChange: {
        '@version': 0.3,
        '@generator': 'iD',
        'create': nest(changes.created.map(rep), ['node', 'way', 'relation']),
        'modify': nest(changes.modified.map(rep), ['node', 'way', 'relation']),
        'delete': _.extend(nest(changes.deleted.map(rep), ['relation', 'way', 'node']), {'@if-unused': true})
      }
    };
  };

  proto.changesetTags = function(comment, imageryUsed) {
    var tags = {
      imagery_used: imageryUsed.join(';').substr(0, 255),
      created_by: 'iD ' + version
    };

    if (comment) {
      tags.comment = comment;
    }

    return tags;
  };

  proto.putChangeset = function(changes, comment, imageryUsed, callback) {
    oauth.xhr({
        method: 'PUT',
        path: '/api/0.6/changeset/create',
        options: { header: { 'Content-Type': 'text/xml' } },
        content: JXON.stringify(proto.changesetJXON(proto.changesetTags(comment, imageryUsed)))
      }, function(err, changeset_id) {
        if (err) return callback(err);
        oauth.xhr({
          method: 'POST',
          path: '/api/0.6/changeset/' + changeset_id + '/upload',
          options: { header: { 'Content-Type': 'text/xml' } },
          content: JXON.stringify(proto.osmChangeJXON(changeset_id, changes))
        }, function(err) {
          if (err) return callback(err);
          oauth.xhr({
            method: 'PUT',
            path: '/api/0.6/changeset/' + changeset_id + '/close'
          }, function(err) {
            callback(err, changeset_id);
          });
        });
      });
  };

  var userDetails;

  proto.userDetails = function(callback) {
    if (userDetails) {
      callback(undefined, userDetails);
      return;
    }

    function done(err, user_details) {
      if (err) return callback(err);

      var u = user_details.getElementsByTagName('user')[0],
        img = u.getElementsByTagName('img'),
        image_url = '';

      if (img && img[0] && img[0].getAttribute('href')) {
        image_url = img[0].getAttribute('href');
      }

      userDetails = {
        display_name: u.attributes.display_name.value,
        image_url: image_url,
        id: u.attributes.id.value
      };

      callback(undefined, userDetails);
    }

    oauth.xhr({ method: 'GET', path: '/api/0.6/user/details' }, done);
  };

  proto.status = function(callback) {
    function done(capabilities) {
      var apiStatus = capabilities.getElementsByTagName('status');
      callback(undefined, apiStatus[0].getAttribute('api'));
    }
    d3.xml(url + '/api/capabilities').get()
      .on('load', done)
      .on('error', callback);
  };

  function abortRequest(i) { i.abort(); }

  proto.tileZoom = function(_) {
    if (!arguments.length) return tileZoom;
    tileZoom = _;
    return proto;
  };

  proto.loadTiles = function(projection, dimensions) {

    if (off) return;

    var s = projection.scale() * 2 * Math.PI,
      z = Math.max(Math.log(s) / Math.log(2) - 8, 0),
      ts = 256 * Math.pow(2, z - tileZoom),
      origin = [
        s / 2 - projection.translate()[0],
        s / 2 - projection.translate()[1]];

    var tiles = d3.geo.tile()
      .scaleExtent([tileZoom, tileZoom])
      .scale(s)
      .size(dimensions)
      .translate(projection.translate())()
      .map(function(tile) {
        var x = tile[0] * ts - origin[0],
          y = tile[1] * ts - origin[1];

        return {
          id: tile.toString(),
          extent: geo.Extent(
            projection.invert([x, y + ts]),
            projection.invert([x + ts, y]))
        };
      });

    function bboxUrl(tile) {
      return url + '/api/0.6/map?bbox=' + tile.extent.toParam();
    }

    _.filter(inflight, function(v, i) {
      var wanted = _.find(tiles, function(tile) {
        return i === tile.id;
      });
      if (!wanted) delete inflight[i];
      return !wanted;
    }).map(abortRequest);

    tiles.forEach(function(tile) {
      var id = tile.id;

      if (loadedTiles[id] || inflight[id]) return;

      if (_.isEmpty(inflight)) {
        event.loading();
      }

      inflight[id] = proto.loadFromURL(bboxUrl(tile), function(err, parsed) {
        loadedTiles[id] = true;
        delete inflight[id];

        event.load(err, _.extend({data: parsed}, tile));

        if (_.isEmpty(inflight)) {
          event.loaded();
        }
      });
    });
  };

  proto.switch = function(options) {
    url = options.url;
    oauth.options(_.extend({}, options));
    event.auth();
    proto.flush();
    return proto;
  };

  proto.toggle = function(_) {
    off = !_;
    return proto;
  };

  proto.flush = function() {
    _.forEach(inflight, abortRequest);
    loadedTiles = {};
    inflight = {};
    return proto;
  };

  proto.loadedTiles = function(_) {
    if (!arguments.length) return loadedTiles;
    loadedTiles = _;
    return proto;
  };

  proto.logout = function() {
    oauth.logout();
    event.auth();
    return proto;
  };

  proto.authenticate = function(callback) {
    function done(err, res) {
      event.auth();
      if (callback) callback(err, res);
    }
    return oauth.authenticate(done);
  };

  return proto;

};
