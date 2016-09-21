
var App = new Events();

$(function() {

  document.querySelector('.panel').addEventListener('touchstart', function(e) {
    e.stopPropagation();
  });

  User.init();
  Map.init();
  Editor.init();
  Position.start();

  App.on('FEATURE_SELECT', function() {
    $('#intro').hide();
    $('#editor').fadeIn();
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
