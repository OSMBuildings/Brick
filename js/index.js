const app = new Events();
const osm = new OSMAPI(config.OSMAPI);

$(e => {

  let selectedFeature;

  $.ajax('buildings.json').then(json => {
    const feature = json[1];
    $('#building-data').show().text(JSON.stringify(feature));
    app.emit('FEATURE_SELECT', feature);
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
      app.emit('OSM_LOGIN');
    });
  });

  $('#editor button[name=button-cancel]').click(e => {
    // TODO: reset or re-fill values upon next edit
    $('#editor').hide();
    $('#button-edit').show();
  });

  $('#editor button[name=button-submit]').click(e => {
    onSubmit(selectedFeature);
  });

  app.on('FEATURE_SELECT', feature => {
    selectedFeature = feature;

    const properties = selectedFeature.properties;
    $('input[name=levels]').val(properties['building:levels'] !== undefined ? properties['building:levels'] : '');
    $('input[name=height]').val(properties['height'] !== undefined ? properties['height'] : '');

    $('#button-edit').show();
  });

  app.on('OSM_LOGIN', e => {
    $('#login').hide();
    $('#editor').show();
    $('#button-edit').hide();
  });
});

function checkNum (num, min, max) {
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

function compareNum (a, b) {
  if (typeof a === 'undefined' && typeof b === 'undefined') {
    return true;
  }
  if (typeof a === 'undefined') {
    return false;
  }
  if (typeof b === 'undefined') {
    return false;
  }
  return (a === b);
}

function onSubmit (feature) {
  const minLevels = 0;
  const maxLevels = 500;
  const minHeight = 0;
  const maxHeight = 1500;

  let levels;
  if ($('#levels').val() !== '') {
    levels = parseFloat($('#levels').val());
    if (!checkNum(levels, minLevels, maxLevels)) {
      console.log('invalid levels', levels);
      return;
    }
  }

  let height;
  if ($('#height').val() !== '') {
    height = parseFloat($('#height').val());
    if (!checkNum(height, minHeight, maxHeight)) {
      console.log('invalid height', height);
      return;
    }
  }

  const osmbLevels = feature.properties.levels;
  const osmbHeight = feature.properties.height;
  if (compareNum(levels, osmbLevels) && compareNum(height, osmbHeight)) {
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
      const osmData = new OSMData(doc);
      if (osmData.addLevels(levels) || osmData.addHeight(height)) {
        osmData.write();
        osm.writeItem(osmData.feature);
        // app.emit('FEATURE_UPDATE', data.feature);
      }
    }, err => {
      console.error(err)
    });

  $('#editor').hide();
  $('#button-edit').show();
}
