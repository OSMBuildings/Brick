
Brick.Provider = function(bus, config) {
  this.bus = bus;
  this.url = config.url;

  bus.on('FEATURE_SELECTED', function(e) {
    this.loadFeature(e.feature);
  }, this);
};

Brick.Provider.prototype = {};

Brick.Provider.prototype.loadFeature = function(id) {
  var bus = this.bus;
  loadJSON(this.url.replace('{id}', id), function(json) {
    bus.emit('FEATURE_LOADED', json);
  });
};
