
var App = new Events();

$(function() {

  User.init();
  Map.init();
  Editor.init();
  Locate.start();

  Map.on('FEATURE_SELECT', function(featureId) {
    $('#intro').hide();
    $('#editor').fadeIn();

    if (history.pushState) {
  //   history.pushState(null, null, baseURL + 'feature/' + featureId);
    }

    // for now, we enable simple objects only
    if (featureId[0] === 'w') {
      $.ajax('http://api.openstreetmap.org/api/0.6/' + featureId.replace(/^([wr])/, function($0, $1) {
          var m = {
            w: 'way/',
            r: 'relation/'
          };
          return m[$1] || $1;
        })).done(function(doc) {
      // $.ajax('http://api.openstreetmap.org/api/0.6/way/98867555').done(function(doc) {
        App.emit('ITEM_LOAD', JXON.build(doc.children[0]));
      });
    }
  });

  // Map.on('CHANGE', function(state) {
  //   $('#intro-link-ideditor').attr('href', 'http://www.openstreetmap.org/edit#map=' + state.zoom + '/' + state.position.latitude + '/' + state.position.longitude);
  // });
});
