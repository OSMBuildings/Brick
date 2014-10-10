
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

  var overlay = new Brick.ui.Overlay({ container: config.overlayContainer });

  var partSelection = new Brick.ui.PartSelection({
    container: config.partSelectionContainer,
    renderer: function(item) {
      return 'Part #'+ item.id + (item.properties.tags && item.properties.tags.name ? ' ('+ item.properties.tags.name +')' : '');
    }
  });

  var tagEditor = new Brick.ui.TagEditor({
    container: config.tagEditorContainer
  });

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
      overlay.show();
    });

    mapEngine.panTo(geo);
  }, provider);

  provider.on('featureLoaded', function(parts) {
    partSelection.populate(parts);
    if (parts.features.length > 1) {
      tagEditor.hide();
      partSelection.show();
    } else {
      tagEditor.populate(parts.features[0]);
      partSelection.hide();
      tagEditor.show();
    }
  }, partSelection);

  partSelection.on('partSelected', function(part) {
    tagEditor.populate(part);
    partSelection.hide();
    tagEditor.show();
  }, tagEditor);

  //*******************************************************

//  var osm = Brick.OSMAPI(session.auth);

};

Brick.VERSION = '0.1.0';
