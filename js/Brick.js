
var Brick = {};

Brick.VERSION = '0.1.0';

// var osm = OSMAPI(session.auth);

Bus.on('FEATURE_SELECTED', function(e) {
  loadJSON(config.provider.url.replace('{id}', e.feature), function(json) {
    Bus.emit('FEATURE_LOADED', json);
  });
});
