
var App = new Events();

$(function() {

  let feature;

  $('#simulate-building-click').click( () => {

    $.get("assets/building.json", (json) => {
      if(json.length <= 0) return;

      feature = json[0];

      $('#building-data').show();
      $('#building-data').text(JSON.stringify(feature));
      App.emit('FEATURE_SELECT', feature);
    });

  });

  $('#login-button-in').click( (e) => {

    e.stopPropagation();
    OSMAPI.login();

  });
  $('#logout-button').click( (e) => {

    e.stopPropagation();
    OSMAPI.logout();

  });


  $('#editor-button-submit').click( () =>{

    App.emit('FEATURE_CHANGE', feature)

  });

  $('#editor-button-start').click( () => {

    if (!OSMAPI.isLoggedIn()) {
      $('#login').show();
    } else {
      $('#editor').show();
      $('#logout').show();
    }

  });

  $('#editor-button-cancel').click( () => {

    $('#editor').hide();

  });

  App.on('FEATURE_SELECT', onFeatureSelect);
  App.on('LOGIN', onLogin);
  App.on('LOGOUT', onLogout);
  App.on('FEATURE_CHANGE', featureChange);

});

const sendData = (data) => {

  data.write();
  OSMAPI.writeItem(data.feature, config.editComment);

}

const isNumber = (num) => { return !isNaN(parseInt(num)) && !isNaN(num - 0) }

const onLogout = () => {

  $('#login-button-in').show();
  $('#logout').hide();
  $('#editor').hide();

}

const onLogin = () => {

  $('#login-button-in').hide();
  $('#logout').show();
  $('#editor').show();

}

const featureChange = (feature) => {

  // if no values are in feature set to zero for check with values(newHeight) from user(there are zero if no values are given)
  let OSMBheight = feature.properties.height || 0;
  let OSMBlevel = feature.properties.levels || 0;

  const minLevels = 0;
  const maxLevels = 200;
  const minHeight = 0;
  const maxHeight = 1500;

  let newLevel = $('#building-level').get(0).value;
  let newHeight = $('#building-height').get(0).value;

  // check if user data is valid
  if(!(isNumber(newLevel) && newLevel >= minLevels && newLevel <= maxLevels)){
    alert(`Are your sure the building has ${newLevel} Levels?`);
    return;
  }

  if(!(isNumber(newHeight) && newHeight >= minHeight && newHeight <= maxHeight)){
    alert(`Are your sure the building is ${newHeight} meters tall?`);
    return;
  }

  newLevel = parseInt(newLevel);
  newHeight = parseInt(newHeight);

  // check if user data has changed compared to OSMB data
  const changeLevel = newLevel !== parseInt(OSMBlevel);
  const changeHeight = newHeight !== parseInt(OSMBheight);

  // none of the values changed
  if(!(changeLevel || changeHeight)){
    alert('You need to change either the level of the building or the height.');
    return;
  }



  let itemType = 'way';
  let itemId = feature.id;

  if (feature.id.toString().charAt(0) === 'r'){
    itemType = 'relation';
    itemId = itemId.substr(1);
  }

  OSMAPI.readItem(itemType, itemId)
    .done( doc => {

      let data = new Data(doc);
      if(data.addLevels(newLevel) | data.addHeight(newHeight)){
        sendData(data);
      }

    })
    .fail( e => {
      alert('Sorry internal problem. Please try again.');
      console.error(e)
    });

  $('#editor').hide();
  $('#building-data').hide();
  $('#editor-button-start').hide();

}

const onFeatureSelect = (feature) => {

  const properties = feature.properties;

  $('#editor-button-start').show();
  // fill input fields with values from OSMB
  properties.hasOwnProperty('building:levels') ? $('#building-level').val(properties['building:levels']) : $('#building-level').val('0');
  properties.hasOwnProperty('height') ? $('#building-height').val(properties.height) : $('#building-height').val('0');

}