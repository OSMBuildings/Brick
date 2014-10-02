
Brick.OSMAPI = function(oauth) {

  var url = 'http://www.openstreetmap.org';

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

  proto.status = function(callback) {
    function done(capabilities) {
      var apiStatus = capabilities.getElementsByTagName('status');
      callback(undefined, apiStatus[0].getAttribute('api'));
    }
    d3.xml(url + '/api/capabilities').get()
      .on('load', done)
      .on('error', callback);
  };

  return proto;

};
