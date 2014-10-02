
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

  map.on('featureSelected', provider.loadFeature, provider);

  //*******************************************************

  var selection = new Brick.Selection({
    container: config.listContainer,
    renderer: function(item) {
      return item.id + (item.properties.tags && item.properties.tags.name ? ' ('+ item.properties.tags.name +')' : '');
    }
  });

  provider.on('featureLoaded', function(collection) {
    selection.populate(collection);
    editor.clear();
  }, selection);

  var editor = new Brick.Editor({
    container: config.editorContainer
  });

  selection.on('selectPart', function(part) {
    editor.populate(part);
  }, editor);

  //*******************************************************

//  var osm = Brick.OSMAPI(session.auth);

};

Brick.VERSION = '0.1.0';
