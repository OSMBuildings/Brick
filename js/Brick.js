
var baseURL = location.href;

// var osm = OSMAPI(session.auth);

Bus.on('FEATURE_SELECTED', function(featureId) {
  // TODO: can also be done via OSMB
  loadJSON(config.provider.url.replace('{id}', featureId), function(geojson) {
    var feature = geojson.features[0];
//  tags = Data.alignTags(feature.properties && feature.properties.tags || {}),
    Bus.emit('FEATURE_LOADED', feature);
  });

  if (history.pushState) {
    history.pushState(null, null, baseURL +'feature/'+ featureId);
  }
});

Bus.on('FEATURE_CLEARED', function() {
  document.title = 'Brick';
  if (history.replaceState) {
    history.replaceState(null, '', baseURL);
  }
});

Bus.on('FEATURE_LOADED', function(feature) {
  var tags = feature.properties.tags || {};
  var title = tags.name ? tags.name +' (ID '+ feature.id +')' : 'Building ID '+ feature.id;
  document.title = title +' - Brick';
});


// TODO: remove this

function unselect() {
  Bus.emit('FEATURE_CLEARED');
}

