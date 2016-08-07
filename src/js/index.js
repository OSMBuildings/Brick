
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

  // $.ajax('http://api.openstreetmap.org/api/0.6/way/' + featureId.replace(/^\D/, '')).done(function(doc) {
  //   var way = JXON.build(doc.getElementsByTagName('way')[0]);
  //
  //   var tags = {};
  //   for (var i = 0, il = way.tag.length; i <il; i++) {
  //     tags[ way.tag[i]['@k'] ] = way.tag[i]['@v'];
  //   }
  //
  //   document.title = (tags.name ? tags.name + ' - ' : '') + config.appName;
  //   Events.emit('FEATURE_LOADED', { id:way['@id'], tags:tags });
  // });

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
// console.log('USER', user);
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
  // $('#hint').click(function() {
  //   $('#hint').fadeOut(200);
  // });

  toggleLogin();

  $('#login-button').click(function(e) {
    e.stopPropagation();
    Auth.login();
  });

  Map.init();
  Editor.init();
});
