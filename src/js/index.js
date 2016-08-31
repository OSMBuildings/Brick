
// var baseURL = location.href;

//*****************************************************************************

Events.on('FEATURE_SELECTED', function(featureId) {
  $('#intro').hide();
  $('#editor').fadeIn();

  if (history.pushState) {
//   history.pushState(null, null, baseURL + 'feature/' + featureId);
  }

  $.ajax('http://api.openstreetmap.org/api/0.6/' + featureId.replace(/^([wr])/, function($0, $1) {
      var m = {
        w: 'way/',
        r: 'relation/'
      };
      return m[$1] || $1;
    })).done(function(doc) {
  // $.ajax('http://api.openstreetmap.org/api/0.6/way/98867555').done(function(doc) {
    Events.emit('ITEM_LOADED', JXON.build(doc.children[0]));
  });

});

// Events.on('MAP_CHANGE', function(state) {
//   $('#intro-link-ideditor').attr('href', 'http://www.openstreetmap.org/edit#map=' + state.zoom + '/' + state.position.latitude + '/' + state.position.longitude);
// });

//*****************************************************************************

$(function() {
  User.init();
  Map.init();
  Editor.init();
});
