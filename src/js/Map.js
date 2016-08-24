
var Map;

(function() {

  Map.init = function() {
    var position, p;
    if ((p = State.get('position'))) {
      position = [parseFloat(p.latitude), parseFloat(p.longitude)];
    } else {
      position = [config.map.position.latitude, config.map.position.longitude];
    }

    var zoom = State.get('zoom') || config.map.zoom;

    var map = new L.Map('map', { zoomControl: false }).setView(position, zoom);
    var zoomControl = L.control.zoom({ position:'topright' });
    zoomControl.addTo(map);

    map.on('moveend zoomend', function() {
      var
        center = map.getCenter(),
        latitude = center.lat,
        longitude = center.lng,
        zoom = map.getZoom();
      State.set('latitude',  latitude.toFixed(5));
      State.set('longitude', longitude.toFixed(5));
      State.set('zoom', zoom);
      Events.emit('MAP_CHANGE', { zoom:zoom, position: { latitude:latitude, longitude:longitude }});
    });

    map.fire('moveend');

    new L.TileLayer(config.map.basemapUrl, { maxNativeZoom: config.map.maxZoom, maxZoom: config.map.maxZoom+2 }).addTo(map);

    new OSMBuildings(map)
      .load()
      .click(function(e) {
        Events.emit('FEATURE_SELECTED', e.feature);
      });

    L.control.locate({
      position: 'topright',  // set the location of the control
      drawCircle: true,  // controls whether a circle is drawn that shows the uncertainty about the location
      follow: true,  // follow the user's location
      setView: true, // automatically sets the map view to the user's location, enabled if `follow` is true
      keepCurrentZoomLevel: true, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
      stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
      remainActive: false, // if true locate control remains active on click even if the user's location is in view.
      markerClass: L.circleMarker, // L.circleMarker or L.marker
      circleStyle: {},  // change the style of the circle around the user's location
      markerStyle: {},
      followCircleStyle: {},  // set difference for the style of the circle around the user's location while following
      followMarkerStyle: {},
      icon: 'fa fa-map-marker',  // class for icon, fa-location-arrow or fa-map-marker
      iconLoading: 'fa fa-spinner fa-spin',  // class for loading icon
      circlePadding: [0, 0], // padding around accuracy circle, value is passed to setBounds
      metric: true,  // use metric or imperial units
      onLocationError: function(err) {alert(err.message)},  // define an error callback function
      // onLocationOutsideMapBounds:  function(context) { // called when outside map boundaries
      //   alert(context.options.strings.outsideMapBoundsMsg);
      // },
      showPopup: false, // display a popup when the user click on the inner marker
      strings: {
        title: "Set map to my location"//,  // title of the locate control
        // popup: "You are within {distance} {unit} from this point",  // text to appear if user clicks on circle
        // outsideMapBoundsMsg: "You seem located outside the boundaries of the map" // default message for onLocationOutsideMapBounds
      },
      locateOptions: {}  // define location options e.g enableHighAccuracy: true or maxZoom: 10
    }).addTo(map);

    return map;
  };

}());

