
// var baseURL = location.href;
//
// // var osm = OSMAPI(session.auth);
//
// Events.on('FEATURE_CLEARED', function() {
//   document.title = 'Brick';
//   if (history.replaceState) {
//     history.replaceState(null, '', baseURL);
//   }
// });

//*****************************************************************************

Events.on('FEATURE_SELECTED', function(featureId) {
  Editor.show();

  if (history.pushState) {
//   history.pushState(null, null, baseURL +'feature/'+ featureId);
  }

  $.ajax(config.map.featureUrl.replace('{id}', featureId)).done(function(geojson) {
    var feature = geojson.features[0];

    // TODO
//  feature.properties = Data.alignTags(feature.properties),
    feature.properties = {
      'name': undefined,
      'building': 'yes',
      'building:use': undefined,
      'roof:shape': 'gabled',
      'building:levels': 3,
      'roof:levels': 1,
      'building:colour': undefined,
      'roof:colour': '#ffeedd',
      'height': 10,
      'roof:height': undefined,
      'building:material': 'brick',
      'roof:material': undefined
    };

    document.title = (feature.properties.name ? feature.properties.name + ' - ' : '') + config.appName;

    Events.emit('FEATURE_LOADED', feature);
   });
});

Events.on('MAP_CHANGE', function(state) {
  $('#intro-link-ideditor').attr('href', 'http://www.openstreetmap.org/edit#map=' + state.zoom + '/' + state.position.latitude + '/' + state.position.longitude);
});

//*****************************************************************************

$(function() {
  $('#intro-button-start').click(function() {
    $('#intro').fadeOut(200, function() {
      $('#map').removeClass('covered');
    });
  });

  Map.init();
  Editor.init();
});
