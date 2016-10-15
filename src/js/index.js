
var App = new Events();

$(function() {

  document.querySelector('.panel').addEventListener('touchstart', function(e) {
    e.stopPropagation();
  });

  User.init();
  Map.init();
  Editor.init();

  if (!location.search) {
    Position.get();
  } else {
    var
      query = location.search.substring(1),
      params = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
      if ($1) {
        params[$1] = decodeURIComponent($2);
      }
    });

    if (params.lat && params.lon) {
      App.emit('POSITION_CHANGE', { latitude: params.lat, longitude: params.lon });
    } else {
      Position.get();
    }
  }

  App.on('FEATURE_SELECT', function() {
    $('#intro').hide();
    $('#editor').fadeIn();
  });

  // App.on('FEATURE_LOAD', function(feature) {
  //   if (history.pushState) {
  //     history.pushState(null, null, baseURL + 'feature/' + feature.id);
  //   }
  // });
});
