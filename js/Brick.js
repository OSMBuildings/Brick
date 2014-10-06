
var Brick = function(config) {

  var session = new Brick.Session({
    landingPage: config.oauthLandingPage,
    consumerKey: config.oauthConsumerKey,
    secret: config.oauthSecret
  });

  //*******************************************************

  var provider = new Brick.Provider({
    url: config.providerURL
  });

  //*******************************************************

  var mapConfig = {
    mapId: config.mapId
  };

  //*******************************************************

  var state = new Brick.State();

  if (state.get('lat') !== undefined && state.get('lon') !== undefined) {
    mapConfig.lat = parseFloat(state.get('lat'));
    mapConfig.lon = parseFloat(state.get('lon'));
  }
  if (state.get('zoom') !== undefined) {
    mapConfig.zoom = state.get('zoom');
  }

  //*******************************************************

  var map = new Brick.Map(mapConfig);

  map.on('mapChanged', function(e) {
    for (var p in e) {
      state.get(p, e[p]);
    }
  });

  var overlay = new Brick.ui.Overlay({ container: config.overlayContainer });
  map.on('featureSelected', function(e) {
    provider.loadFeature(e.feature);

    var mapEngine = map.getEngine();
    var p = mapEngine.latLngToContainerPoint(L.latLng(e.lat, e.lon));
    p.y += innerHeight*0.375; // put it vertically in center of the topmost quarter of the screen
    var geo = mapEngine.containerPointToLatLng(p);

    mapEngine.once('moveend', function() {
      tagEditor.hide();
      overlay.show();
    });

    mapEngine.panTo(geo);

  }, provider);

  //*******************************************************

  var partSelection = new Brick.ui.PartSelection({
    container: config.partSelectionContainer,
    renderer: function(item) {
      return item.id + (item.properties.tags && item.properties.tags.name ? ' ('+ item.properties.tags.name +')' : '');
    }
  });

  provider.on('featureLoaded', function(collection) {
    //tagEditor.clear();
    partSelection.populate(collection);
    partSelection.show();
  }, partSelection);

  var tagEditor = new Brick.ui.TagEditor({
    container: config.tagEditorContainer
  });

  partSelection.on('partSelected', function(part) {
    partSelection.hide();
    tagEditor.populate(part);
    tagEditor.show();
  }, tagEditor);

  //*******************************************************

//  var osm = Brick.OSMAPI(session.auth);

};

Brick.VERSION = '0.1.0';
