
Brick.Map = function(config) {
  Brick.Events.prototype.constructor.call(this);

  var pos = [52.52179, 13.39503];
  if (config.lat !== undefined && config.lon !== undefined) {
    pos = [config.lat, config.lon];
  }

  var map = this.map = new L.Map(config.mapId).setView(pos, config.zoom || 18);

  map.on('moveend zoomend', function() {
    var center = map.getCenter();
    this.emit('mapChanged', {
      lat: center.lat.toFixed(5),
      lon: center.lng.toFixed(5),
      zoom: map.getZoom()
    });
  }, this);

  new L.TileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', { maxNativeZoom: 19, maxZoom: 21 }).addTo(this.map);
  //new L.TileLayer('http://{s}.tiles.mapbox.com/v3/osmbuildings.gm744p3p/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(this.map);

  this.popup = new L.Popup({ maxHeight: 200, autoPanPaddingTopLeft: [0, 0] });

  new OSMBuildings(map)
    .load()
    .click(function(e) {
      this.emit('featureSelected', e.feature);
      this.currentSelection = e;
      this.showPopup();
    }, this);
};

var proto = Brick.Map.prototype = new Brick.Events();

proto.showPopup = function(json) {
  var e = this.currentSelection;
  var content = '<b>OSM ID '+ e.feature +'</b>';
  if (json) {
    for (var i = 0; i < json.features.length; i++) {
      content += '<br><em>OSM Part ID</em> '+ json.features[i].id;
      content += '<br>'+ JSON.stringify(json.features[i].properties.tags);
    }
  }
  this.popup
    .setLatLng(L.latLng(e.lat, e.lon))
    .setContent(content)
    .openOn(this.map);
};
