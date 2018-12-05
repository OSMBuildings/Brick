const App = new Events();

$(e => {

  const osm = new OSMAPI(config.OSMAPI);

  $.ajax('buildings.json').then(json => {
    const feature = json[1];
    $('#building-data').show().text(JSON.stringify(feature));
    App.emit('FEATURE_SELECT', feature);
  });

  $('#button-edit').click(e => {
    if (!osm.isLoggedIn()) {
      $('#login').show();
    } else {
      $('#editor').show();
      $('#button-edit').hide();
    }
  });

  $('#login button[name=button-login]').click(e => {
    osm.login().then(() => {
      App.emit('OSM_LOGIN');
    });
  });

  $('#editor button[name=button-cancel]').click(e => {
    // TODO: reset or re-fill values upon next edit
    $('#editor').hide();
    $('#button-edit').show();
  });

  $('#editor button[name=button-submit]').click(e => {
    onSubmit();
  });

  App.on('FEATURE_SELECT', feature => {
    const properties = feature.properties;
    $('#button-edit').show();
    // fill input fields with values from OSMB
    $('input[name=levels]').val(properties['building:levels'] !== undefined ? properties['building:levels'] : '');
    $('input[name=height]').val(properties['height'] !== undefined ? properties['height'] : '');
  });

  App.on('OSM_LOGIN', e => {
    $('#login').hide();
    $('#editor').show();
    $('#button-edit').hide();
  });
});

function checkNumber (num, min, max) {
  if (!isNaN(num)) {
    return false;
  }

  if (num < min) {
    return false;
  }

  if (num > max) {
    return false;
  }

  return true;
}

function onSubmit (feature) {
  const minLevels = 0;
  const maxLevels = 500;
  const minHeight = 0;
  const maxHeight = 1500;

  let levels;
  if ($('#levels').val() !== '') {
    levels = parseFloat($('#levels').val());
    if (!checkNumber(levels, minLevels, maxLevels)) {
      console.log('invalid levels', levels);
      return;
    }
  }

  let height;
  if ($('#height').val() !== '') {
    height = parseFloat($('#height').val());
    if (!checkNumber(height, minHeight, maxHeight)) {
      console.log('invalid height', height);
      return;
    }
  }

  const osmbHeight = feature.properties.height;
  const osmbLevels = feature.properties.levels;

  // TODO: undefined
  if (levels === osmbLevels && height === osmbHeight) {
    return;
  }

  let itemType = 'way';
  let itemId = feature.id;
  if (feature.id[0] === 'r') {
    itemType = 'relation';
    itemId = itemId.substr(1);
  }

  osm.readItem(itemType, itemId)
    .then(doc => {
      let data = new Data(doc);
      if (data.addLevels(levels) || data.addHeight(height)) {
        data.write();
        osm.writeItem(data.feature);
        // App.emit('FEATURE_UPDATE', data.feature);
      }
    }, err => {
      console.error(err)
    });

  $('#editor').hide();
  $('#button-edit').show();
}
