
var OSMAPI = function(oauth) {

  // Generate Changeset XML
  // @returns a string.
  function createChangeset(comment) {
    var tags = {
      created_by: config.appName
    };

    if (comment) {
      tags.comment = comment;
    }

    return {
      osm: {
        changeset: {
          tag: tags.map(function(value, key) {
            return { '@k': key, '@v': value };
          }),
          '@version': 0.3,
          '@generator': config.appName
        }
      }
    };
  };

  // Generate an OSM change (http://wiki.openstreetmap.org/wiki/OsmChange)
  // @returns a string.
  function createChange(changesetId, changes) {
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
      return entity.asJXON(changesetId);
    }

    return {
      osmChange: {
        '@version': 0.3,
        '@generator': config.appName,
        modify: nest(changes.modified.map(rep), ['node', 'way', 'relation']),
      }
    };
  };

  function putChangeset(changes, comment, callback) {
    oauth.xhr({
      method: 'PUT',
      path: '/api/0.6/changeset/create',
      options: { header: { 'Content-Type': 'text/xml' } },
      content: JXON.stringify(createChangeset(comment))
    }, function(err, changesetId) {
      if (err) {
        return callback(err);
      }
      oauth.xhr({
        method: 'POST',
        path: '/api/0.6/changeset/'+ changesetId +'/upload',
        options: { header: { 'Content-Type': 'text/xml' } },
        content: JXON.stringify(createChange(changesetId, changes))
      }, function(err) {
        if (err) {
          return callback(err);
        }
        oauth.xhr({
            method: 'PUT',
            path: '/api/0.6/changeset/'+ changesetId +'/close'
          }, function(err) {
            callback(err, changesetId);
          });
        });
      });
  };
};
