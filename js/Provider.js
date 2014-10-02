
Brick.Provider = function(config) {
  Brick.Events.prototype.constructor.call(this);
  this.url = config.url;
};

var proto = Brick.Provider.prototype = Object.create(Brick.Events.prototype);

proto.loadFeature = function(id) {
  loadJSON(this.url.replace('{id}', id), function(json) {
    this.emit('featureLoaded', json);
  }, this);
};
