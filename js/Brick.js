
var Brick = function(config) {

  new Brick.Session({
    landingPage: config.oauthLandingPage,
    consumerKey: config.oauthConsumerKey,
    secret: config.oauthSecret
  });

  //*******************************************************

  var provider = new Brick.Provider({
    url: config.providerURL
  });

  //*******************************************************

  var state = new Brick.State();

  var mapConfig = {};
  if (state.get('lat') !== undefined && state.get('lon') !== undefined) {
    mapConfig.lat = parseFloat(state.get('lat'));
    mapConfig.lon = parseFloat(state.get('lon'));
  }
  if (state.get('zoom') !== undefined) {
    mapConfig.zoom = state.get('zoom');
  }

  //*******************************************************

  var map = new Brick.Map(mapConfig);
  var tagEditor = new Brick.ui.TagEditor();

  //*******************************************************

  map.on('mapChanged', function(e) {
    for (var p in e) {
      state.set(p, e[p]);
    }
  });

  map.on('featureSelected', function(e) {
    provider.loadFeature(e.feature);

    var mapEngine = map.getEngine();
    var p = mapEngine.latLngToContainerPoint(L.latLng(e.lat, e.lon));
    p.y += innerHeight*0.375; // put it vertically in center of the topmost quarter of the screen
    var geo = mapEngine.containerPointToLatLng(p);

    mapEngine.once('moveend', function() {
      tagEditor.show();
    });

    mapEngine.panTo(geo);
  }, provider);

  provider.on('featureLoaded', function(parts) {
//  if (parts.features.length > 1) {}
    tagEditor.populate(parts.features[0]);
  });

  //*******************************************************

//  var osm = Brick.OSMAPI(session.auth);

};

Brick.VERSION = '0.1.0';
