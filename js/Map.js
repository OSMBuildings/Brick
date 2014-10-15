
Brick.Map = function(bus, config) {
  var pos = [52.52179, 13.39503];
  if (config.lat !== undefined && config.lon !== undefined) {
    pos = [config.lat, config.lon];
  }

  var map = this._engine = new L.Map('map').setView(pos, config.zoom || 18);

  map.on('moveend zoomend', function() {
    var center = map.getCenter();
    bus.emit('MAP_CHANGED', {
      lat: center.lat.toFixed(5),
      lon: center.lng.toFixed(5),
      zoom: map.getZoom()
    });
  }, this);

  new L.TileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', { maxNativeZoom: 19, maxZoom: 21 }).addTo(map);
  //new L.TileLayer('http://{s}.tiles.mapbox.com/v3/osmbuildings.gm744p3p/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  new OSMBuildings(map)
    .load()
    .click(function(e) {
      bus.emit('FEATURE_SELECTED', e);

      var p = map.latLngToContainerPoint(L.latLng(e.lat, e.lon));
      p.y += innerHeight*0.375; // put it vertically in center of the topmost quarter of the screen
      var geo = map.containerPointToLatLng(p);

      map.once('moveend', function() {
        bus.emit('FEATURE_FOCUSSED');
      });

      map.panTo(geo);
    }, this);
};

Brick.Map.prototype = {};

Brick.Map.prototype.getEngine = function() {
  return this._engine;
};
