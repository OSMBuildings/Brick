
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
//
// // TODO: remove this
//
// function unselect() {
//   Events.emit('FEATURE_CLEARED');
// }

//*****************************************************************************

function getIdeditorUrl() {
  var position = Map.getCenter();
  return 'http://www.openstreetmap.org/edit#map=' + Map.getZoom() + '/' + position.lat + '/' + position.lng;
}

//*****************************************************************************

Events.on('FEATURE_SELECTED', function(featureId) {
  $.ajax(config.map.featureUrl.replace('{id}', featureId), function(geojson) {
    var feature = geojson.features[0];
// //  tags = Data.alignTags(feature.properties && feature.properties.tags || {}),
     Events.emit('FEATURE_LOADED', feature);
   });

   if (history.pushState) {
  //   history.pushState(null, null, baseURL +'feature/'+ featureId);
   }
});

//*****************************************************************************

$(function() {
  $('#intro-link-ideditor').attr('href', getIdeditorUrl());

  $('#intro-button-start').click(function() {
    $('#intro').fadeOut(200, function() {
      $('#map').removeClass('covered');
    });
  });
s});
