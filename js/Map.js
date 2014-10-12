
Brick.Map = function(config) {
  Brick.Events.prototype.constructor.call(this);

  var pos = [52.52179, 13.39503];
  if (config.lat !== undefined && config.lon !== undefined) {
    pos = [config.lat, config.lon];
  }

  var map = this._engine = new L.Map('map').setView(pos, config.zoom || 18);

  map.on('moveend zoomend', function() {
    var center = map.getCenter();
    this.emit('mapChanged', {
      lat: center.lat.toFixed(5),
      lon: center.lng.toFixed(5),
      zoom: map.getZoom()
    });
  }, this);

  new L.TileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', { maxNativeZoom: 19, maxZoom: 21 }).addTo(map);
  //new L.TileLayer('http://{s}.tiles.mapbox.com/v3/osmbuildings.gm744p3p/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  var scope = this;
  new OSMBuildings(map)
    .load()
    .click(function(e) {
      scope.emit('featureSelected', e);
    }, this);
};

var proto = Brick.Map.prototype = Object.create(Brick.Events.prototype);

proto.getEngine = function() {
  return this._engine;
};
