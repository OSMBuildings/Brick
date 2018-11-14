
var App = new Events();

$(function() {

  let feature;

  $('#simulate-building-click').click(function () {

    $.get("assets/building.json", function(json) {
      if(json.length <= 0) return;

      feature = json[0];

      $('#building-data').text(JSON.stringify(feature));
      App.emit('FEATURE_SELECT', feature);
    });
  });

  $('#login-button-in').click(function(e) {
    e.stopPropagation();
    OSMAPI.login();
  });

  $('#editor-button-submit').click(function () {
    App.emit('FEATURE_CHANGE', feature)
  });

  $('#editor-button-start').click(function () {

    if (!OSMAPI.isLoggedIn()) {
      $('#login').show();

      $('#editor').show();
    } else {

    }

  });

  $('#editor-button-cancel').click(function () {
    $('#editor').hide();
    // App.emit('FEATURE_RESET');
    // setValues(loadedFeature);
  });

  App.on('FEATURE_SELECT', onFeatureSelect);
  App.on('LOGIN', onLogin);
  App.on('FEATURE_CHANGE', featureChange);

});

const isNumber = (num) => { return !isNaN(parseInt(num)) && !isNaN(num - 0) }

const onLogin = () => {
  $('#login-button-in').hide();
}

const featureChange = (feature) => {

  let properties = feature.properties;

  // source: https://en.wikipedia.org/wiki/List_of_tallest_buildings
  const minLevels = 1;
  const maxLevels = 163;
  const minHeight = 1;
  const maxHeight = 828;

  let levels = $('#building-level').get(0).value;
  let height = $('#building-height').get(0).value;

  // check if user data is valid

  if(isNumber(levels) && levels >= minLevels && levels <= maxLevels){

  } else {
    alert(`Are your sure the building has ${levels} Levels?`);
  }

  if(isNumber(levels) && height >= minHeight && height <= maxHeight){

  } else {
    alert(`Are your sure the building is ${height} meters tall?`);
  }

  levels = parseInt(levels);
  height = parseInt(height);

  // check if user data has changed compared to OSMB data
  const changeLevel = levels !== parseInt(properties.levels);
  const changeHeight = height !== parseInt(properties.height);

  if(changeLevel || changeHeight){
  //   load OSM data
    // var
    //   types = { n:'node', w:'way', r:'relation' },
    //   itemType = types[ featureId[0] ],
    //   itemId = featureId.replace(/^\D/, '');


    // osmb id 12345 -> node
    // osmb id r12345 -> relation (r weg)

    // OSMAPI.readItem(itemType, itemId)
    //   .done(function(doc) {
    //     setValues(Data.read(doc));
    //   });

  }


  // OSMAPI.writeItem(Data.write(loadedFeature.data, getValues()), config.editComment)
  //   .done(function () {
  //     // TODO update loadedItem
  //     // TODO reset view
  //     isDirty = false;
  //     $('#editor-button-submit').attr('disabled', true);
  //     $('#editor-button-cancel').attr('disabled', true);
  //
  //     // restore map view
  //     App.emit('FEATURE_RESET');
  //   });


  $('#editor').hide();

}




  // function toggleButtons() {
  //   if (OSMAPI.isLoggedIn()) {
  //     $('#editor-button-submit').show();
  //   } else {
  //     $('#editor-button-submit').hide();
  //   }
  // }

  // function onInputChange(e) {
  //   if (!isDirty) {
  //     isDirty = true;
  //     $('#editor-button-submit').attr('disabled', false);
  //     $('#editor-button-cancel').attr('disabled', false);
  //   }
  //
  //   App.emit('FEATURE_CHANGE', { id:loadedFeature.id, tags:getValues(), nodes:loadedFeature.nodes, data:loadedFeature.data });
  // }

  function onFeatureSelect(feature) {

    console.log(feature);
    if (feature.id.toString().charAt(0) === 'r') return;

    const properties = feature.properties;

    $('#editor-button-start').show();

    // // fill input fields with values from OSMB
    properties.hasOwnProperty('levels') ? $('#building-level').val(properties.levels) : $('#building-level').val('0');
    properties.hasOwnProperty('height') ? $('#building-height').val(properties.height) : $('#building-height').val('0');

  }

  // function setValues(feature) {
  //   isDirty = false;
  //   $('#editor-button-submit').attr('disabled', true);
  //   $('#editor-button-cancel').attr('disabled', true);
  //
  //   loadedFeature = feature;
  //
  //   var
  //     nameWithId = feature ? 'Building ' + feature.id : 'Select building',
  //     tags = feature ? feature.tags : {};
  //
  //   document.title = (tags.name ? tags.name + ' - ' : '') + config.appName;
  //   $('#editor h1').text(tags.name ? tags.name : nameWithId);
  //
  //   var value;
  //   $('#editor input, #editor select').each(function(index, input) {
  //     value = tags[input.name];
  //     switch(input.name) {
  //       case 'building':
  //         $(input).find('option').filter(function() {
  //           return $(this).html() === (value || 'yes');
  //         }).prop('selected', true);
  //         break;
  //
  //       case 'roof:shape':
  //         input.value = value || '';
  //         break;
  //
  //       case 'building:levels':
  //       case 'roof:levels':
  //         input.value = (value !== undefined ? value : '');
  //         break;
  //
  //       case 'building:colour':
  //         input.value = value || '';
  //         $('#editor *[name=building\\:colour]').css('border-right-color', (value || 'transparent'));
  //         break;
  //
  //       case 'roof:colour':
  //         input.value = value || '';
  //         $('#editor *[name=roof\\:colour]').css('border-right-color', (value || 'transparent'));
  //         break;
  //     }
  //   });
  //
  //   $('#editor .info[name=height]').text(tags['height'] !== undefined ? '(' + tags['height'] + 'm)' : '');
  //   $('#editor .info[name=roof\\:height]').text(tags['roof:height'] !== undefined ? '(' + tags['roof:height'] + 'm)' : '');
  //
  //   $('#editor .info[name=building\\:material]').text(tags['building:material'] !== undefined ? '(material: ' + tags['building:material'] + ')' : '');
  //   $('#editor .info[name=roof\\:material]').text(tags['roof:material'] !== undefined ? '(material: ' + tags['roof:material'] + ')' : '');
  //
  //
  //
  // }

  // function getValues() {
  //   var tags = loadedFeature.tags;
  //
  //   $('#editor input, #editor select').each(function(index, input) {
  //     switch(input.name) {
  //       case 'building':
  //         // there should always be a value
  //         tags[input.name] = $(input).find('option:selected').val();
  //         break;
  //       case 'roof:shape':
  //       case 'building:colour':
  //       case 'roof:colour':
  //         if (input.value) {
  //           tags[input.name] = input.value;
  //         }
  //         break;
  //       case 'building:levels':
  //       case 'roof:levels':
  //         var value = parseFloat(input.value);
  //         if (!isNaN(value)) {
  //           tags[input.name] = value;
  //         }
  //         break;
  //     }
  //   });
  //
  //   return tags;
  // }



