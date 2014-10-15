
Brick.Provider = function(bus, config) {
  this.bus = bus;
  this.url = config.url;

  bus.on('FEATURE_SLECTED', function(e) {
    this.loadFeature(e.feature);
  }, this);
};

Brick.Provider.prototype = {};

Brick.Provider.prototype.loadFeature = function(id) {
  loadJSON(this.url.replace('{id}', id), function(json) {
    this.bus.emit('FEATURE_LOADED', json);
  });
};
