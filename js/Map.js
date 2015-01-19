
var Map = (function() {

  var geo = [52.52179, 13.39503];
  if (State.get('latitude') !== undefined && State.get('longitude') !== undefined) {
    geo = [parseFloat(State.get('latitude')), parseFloat(State.get('longitude'))];
  }

  var zoom = State.get('zoom') || 18;

  var Map;

  $(function() {
    Map = new L.Map('map').setView(geo, zoom);

    Map.on('moveend zoomend', function() {
      var center = Map.getCenter();
      State.set('latitude',  center.lat.toFixed(5));
      State.set('longitude', center.lng.toFixed(5));
      State.set('zoom', Map.getZoom());
    });

    new L.TileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', { maxNativeZoom: 19, maxZoom: 21 }).addTo(Map);

    new OSMBuildings(Map)
      .load()
      .click(function(e) {
        Bus.emit('FEATURE_SELECTED', e);
      });
  });

  return Map;

}());
