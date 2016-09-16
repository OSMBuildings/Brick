
var OSMAPI = {};

(function() {

  var auth = osmAuth({
    url: config.osmapi.endpoint,
    landing: config.osmapi.auth.landingPage,
    oauth_consumer_key: config.osmapi.auth.consumerKey,
    oauth_secret: config.osmapi.auth.secret
  });

  function createChangeset(comment) {
    return {
      osm: {
        changeset: {
          tag: [
            { '@k':'created_by', '@v':config.appName },
            { '@k':'comment', '@v':comment }
          ],
          '@version': 0.6,
          '@generator': config.appName
        }
      }
    };
  }

  function nest(x, order) {
    var groups = {};
    for (var i = 0; i < x.length; i++) {
      var tagName = Object.keys(x[i])[0];
      if (!groups[tagName]) {
        groups[tagName] = [];
      }
      groups[tagName].push(x[i][tagName]);
    }
    var ordered = {};
    order.forEach(function(o) {
      if (groups[o]) {
        ordered[o] = groups[o];
      }
    });
    return ordered;
  }

  function itemToJXON(item, changesetId) {
    var res, data;

    if (item.relation) {
      data = item.relation;
      res = {
        relation: {
          '@id': data['@id'],
          '@version': data['@version'] || 0,
          member: data.member,
          tag: data.tag
        }
      };
    }

    if (item.way) {
      data = item.way;
      res = {
        way: {
          '@id': data['@id'],
          '@version': data['@version'] || 0,
          nd: data.nd,
          tag: data.tag
        }
      };
    }

    if (!res) {
      return;
    }

    if (changesetId) {
      res.way['@changeset'] = changesetId;
    }

    return res;
  }

  // Generate an OSM change (http://wiki.openstreetmap.org/wiki/OsmChange)
  function createChange(item, changesetId) {
    debugger
    return {
      osmChange: {
        '@version': 0.6,
        '@generator': config.appName,
        modify: nest([itemToJXON(item, changesetId)], ['node', 'way', 'relation']),
      }
    };
  }

  OSMAPI.write = function(item, comment) {
    var promise = $.Deferred();

    auth.xhr({
      method: 'PUT',
      path: '/api/0.6/changeset/create',
      options: {
        header: {
          'Content-Type':'text/xml'
        }
      },
      content: JXON.unbuild(createChangeset(comment))
    }, function(err, changesetId) {
      if (err) {
        promise.reject(err);
        return;
      }
      auth.xhr({
        method: 'POST',
        path: '/api/0.6/changeset/' + changesetId + '/upload',
        options: {
          header: {
            'Content-Type':'text/xml'
          }
        },
        content: JXON.unbuild(createChange(item, changesetId))
      }, function(err) {
        if (err) {
          promise.reject(err);
          return;
        }
        auth.xhr({
          method: 'PUT',
          path: '/api/0.6/changeset/' + changesetId + '/close'
        }, function(err) {
          if (err) {
            promise.resolve(err);
          } else {
            promise.resolve(changesetId);
          }
        });
      });
    });

    return promise;
  };

  OSMAPI.isLoggedIn = function() {
    return auth.authenticated();
  };

  OSMAPI.login = function() {
    auth.authenticate(function() {
      if (!auth.authenticated()) {
        return;
      }
      App.emit('LOGIN');
    });
  };

  OSMAPI.logout = function() {
    auth.logout();
    App.emit('LOGOUT');
  };

  OSMAPI.getUserInfo = function() {
    var promise = $.Deferred();
    auth.xhr({
      method: 'GET',
      accept: 'application/json',
      path: '/api/0.6/user/details.json'
    }, function(err, doc) {
      var user = JXON.build(doc.getElementsByTagName('user')[0]);
      promise.resolve(user);
    });
    return promise;
  };

}());
