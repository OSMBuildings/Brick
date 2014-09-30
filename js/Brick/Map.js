
Brick.Map = function(elId) {

  function restoreState() {
    var state = Brick.State.load();
    if (state.lat !== undefined && state.lon !== undefined) {
      map.setView([parseFloat(state.lat), parseFloat(state.lon)]);
    }
    if (state.zoom !== undefined) {
      map.setZoom(state.zoom);
    }
  }

  function saveState() {
    var center = map.getCenter();
    Brick.State.save({
      lat: center.lat.toFixed(5),
      lon: center.lng.toFixed(5),
      zoom: map.getZoom()
    });
  };

  var map = new L.Map(elId).setView([52.52179, 13.39503], 18);

  map.on('moveend zoomend', saveState);

  restoreState();

  new L.TileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', { maxNativeZoom: 19, maxZoom: 21 }).addTo(map);
  //new L.TileLayer('http://{s}.tiles.mapbox.com/v3/osmbuildings.gm744p3p/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  new OSMBuildings(map)
    .load()
    .click(function(id) {
      console.log('feature id clicked:', id);
    });

  return map;
};

/***
var popup;
osmb.click(function(e) {
  popup = L.popup({ maxHeight:200, autoPanPaddingTopLeft:[50,50] })
    .setLatLng(L.latLng(e.lat, e.lon))
    .setContent('<b>OSM ID '+ e.feature +'</b>')
    .openOn(map);

  var url = 'http://data.osmbuildings.org/0.2/rkc8ywdl/feature/'+ e.feature +'.json';
  ajax(url, function(json) {
    var content = '<b>OSM ID '+ e.feature +'</b>';
    for (var i = 0; i < json.features.length; i++) {
      content += '<br><em>OSM Part ID</em> '+ json.features[i].id;
      content += '<br>'+ formatJSON(json.features[i].properties.tags);
    }
    popup.setContent(content).openOn(map);
  });
});
***/
