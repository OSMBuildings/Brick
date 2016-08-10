
// var baseURL = location.href;
// var osm = OSMAPI(session.auth);

//*****************************************************************************

Events.on('FEATURE_SELECTED', function(featureId) {
  $('#editor').fadeIn();

  if (history.pushState) {
//   history.pushState(null, null, baseURL +'feature/'+ featureId);
  }

  $.ajax(config.map.featureUrl.replace('{id}', featureId)).done(function(geojson) {
    var feature = geojson.features[0];
    var tags = feature.properties.tags;

    document.title = (tags.name ? tags.name + ' - ' : '') + config.appName;
    Events.emit('FEATURE_LOADED', feature);
  });
});

// Events.on('MAP_CHANGE', function(state) {
//   $('#intro-link-ideditor').attr('href', 'http://www.openstreetmap.org/edit#map=' + state.zoom + '/' + state.position.latitude + '/' + state.position.longitude);
// });

Events.on('LOGIN', function(user) {
  toggleLogin();
});

Events.on('LOGOUT', function() {
  toggleLogin();
});

function toggleLogin() {
  if (Auth.isLoggedIn()) {
    $('#login-hint').hide();
    $('#login-button').hide();
  } else {
    $('#login-hint').show();
    $('#login-button').show();
  }
}

//*****************************************************************************

$(function() {
  $('#intro').click(function() {
  //   $('#intro').fadeOut(200);
  });

  toggleLogin();

  $('#login-button').click(function(e) {
    e.stopPropagation();
    Auth.login();
  });

  Map.init();
  Editor.init();
});
