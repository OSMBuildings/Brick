
var Brick = function(config) {

  var bus = new Brick.Bus();

  new Brick.Auth(bus, {
    landingPage: config.oauthLandingPage,
    consumerKey: config.oauthConsumerKey,
    secret: config.oauthSecret
  });

  new Brick.ui.Session(bus);

  new Brick.Provider(bus, { url: config.providerURL });

  var state = new Brick.State(bus);

  var mapConfig = {};
  if (state.get('lat') !== undefined && state.get('lon') !== undefined) {
    mapConfig.lat = parseFloat(state.get('lat'));
    mapConfig.lon = parseFloat(state.get('lon'));
  }
  if (state.get('zoom') !== undefined) {
    mapConfig.zoom = state.get('zoom');
  }

  new Brick.Map(bus, mapConfig);

  new Brick.ui.TagEditor(bus);

//  var osm = Brick.OSMAPI(session.auth);
};

Brick.VERSION = '0.1.0';
