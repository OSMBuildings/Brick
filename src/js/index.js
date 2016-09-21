
var App = new Events();

$(function() {

  User.init();
  Map.init();
  Editor.init();
  Position.start();

  App.on('FEATURE_SELECT', function() {
    $('#intro').hide();
    $('#editor').fadeIn();
  });

  App.on('FEATURE_HOVER', function(featureId) {
    if (featureId && featureId[0] === 'w') {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  });

  // App.on('FEATURE_LOAD', function(feature) {
  //   if (history.pushState) {
  //     history.pushState(null, null, baseURL + 'feature/' + feature.id);
  //   }
  // });

  // App.on('MAP_CHANGE', function(state) {
  //   $('#intro-link-ideditor').attr('href', 'http://www.openstreetmap.org/edit#map=' + state.zoom + '/' + state.position.latitude + '/' + state.position.longitude);
  // });
});
