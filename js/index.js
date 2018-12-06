const app = new Events();
const osm = new OSMAPI(config.OSMAPI);

$(e => {

  let selectedFeature;

  new Map('map');
  // new Search($('#search'));
  new Buildings($('#sidebar-content-list'));

  // $.ajax('buildings.json').then(json => {
  //   const feature = json[1];
  //   $('#sidebar-content-list').show().text(JSON.stringify(feature));
  //   app.emit('FEATURE_SELECT', feature);
  // });

  // $('#button-edit').click(e => {
  //   if (!osm.isLoggedIn()) {
  //     $('#login').show();
  //   } else {
  //     $('#editor').show();
  //     $('#button-edit').hide();
  //   }
  // });

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
    $('input[name=levels]').val(properties['levels'] !== undefined ? properties['levels'] : '');
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
  if (isNaN(num)) {
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

function getLevels ($item) {
  const $levelsTag = $item.children('tag[k=levels]');
  const $buildingLevelsTag = $item.children('tag[k="building:levels"]');

  const str = $levelsTag.attr('v') || $buildingLevelsTag.attr('v');
  if (str === undefined) {
    return;
  }

  return parseInt(str, 10);
}

function setLevels ($item, levels) {
  $item.children('tag[k=levels]').remove();
  $item.children('tag[k="building:levels"]').remove();
  if (typeof levels !== 'undefined') {
    $item.append(`<tag k="levels" v="${levels}"/>`);
  }
}

function getHeight ($item) {
  const $heightTag = $item.children('tag[k=height]');
  const $buildingHeightTag = $item.children('tag[k="building:height"]');

  const str = $heightTag.attr('v') || $buildingHeightTag.attr('v');

  const yardToMeter = 0.9144;
  const footToMeter = 0.3048;
  const inchToMeter = 0.0254;

  if (str === undefined) {
    return;
  }
  const value = parseFloat(str);
  // no units given
  if (value == str) {
    return Math.round(value);
  }
  if (~str.indexOf('m')) {
    return Math.round(value);
  }
  if (~str.indexOf('yd')) {
    return Math.round(value * yardToMeter);
  }
  if (~str.indexOf('ft')) {
    return Math.round(value * footToMeter);
  }
  if (~str.indexOf('\'')) {
    const footInch = str.split('\'');
    return Math.round(footInch[0] * footToMeter + footInch[1] * inchToMeter);
  }
}

function setHeight ($item, height) {
  $item.children('tag[k=height]').remove();
  $item.children('tag[k="building:height"]').remove();
  if (typeof height !== 'undefined') {
    $item.append(`<tag k="height" v="${height}"/>`);
  }
}

function onSubmit (feature) {
  const minLevels = 0;
  const maxLevels = 500;
  const minHeight = 0;
  const maxHeight = 1500;

  let levels;
  if ($('#editor input[name=levels]').val() !== '') {
    levels = parseFloat($('#editor input[name=levels]').val());
    if (!checkNum(levels, minLevels, maxLevels)) {
      console.log('invalid levels', levels);
      return;
    }
  }

  let height;
  if ($('#editor input[name=height]').val() !== '') {
    height = parseFloat($('#editor input[name=height]').val());
    if (!checkNum(height, minHeight, maxHeight)) {
      console.log('invalid height', height);
      return;
    }
  }

  // check for changes
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

  osm.readItem(itemType, itemId).then(doc => {
    const $doc = $(doc).find('osm');
    let $item;
    if ($doc.find('relation')) {
      $item = $doc.find('relation');
    } else {
      $item = $doc.find('way');
    }

    let hasChanged = false;

    if (!compareNum(levels, getLevels($item))) {
      setLevels($item, levels);
      hasChanged = true;
    }

    if (!compareNum(height, getHeight($item))) {
      setHeight($item, height);
      hasChanged = true;
    }

    if (hasChanged) {
      osm.writeItem($doc);
      // app.emit('FEATURE_UPDATE', data.feature);
    }
  }, err => {
    console.error(err)
  });

  $('#editor').hide();
  $('#button-edit').show();
}
