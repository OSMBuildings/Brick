
class Editor {

  constructor () {
    this.osm = new OSMAPI(config.OSMAPI);

    let selectedFeature;

    // $('#button-edit').click(e => {
    //   if (!this.osm.isLoggedIn()) {
    //     $('#login').show();
    //   } else {
    //     $('#editor').show();
    //     $('#button-edit').hide();
    //   }
    // });

    $('#login button[name=button-login]').click(e => {
      this.osm.login().then(() => {
        app.emit('OSM_LOGIN');
      });
    });

    $('#editor button[name=button-cancel]').click(e => {
      // TODO: reset or re-fill values upon next edit
      $('#editor').hide();
      $('#button-edit').show();
    });

    $('#editor button[name=button-submit]').click(e => {
      this.onSubmit(selectedFeature);
    });

    app.on('PART_SELECT', feature => {
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
  }

  checkNum (num, min, max) {
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

  compareNum (a, b) {
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

  getLevels ($item) {
    const $levelsTag = $item.children('tag[k=levels]');
    const $buildingLevelsTag = $item.children('tag[k="building:levels"]');

    const str = $levelsTag.attr('v') || $buildingLevelsTag.attr('v');
    if (str === undefined) {
      return;
    }

    return parseInt(str, 10);
  }

  setLevels ($item, levels) {
    $item.children('tag[k=levels]').remove();
    $item.children('tag[k="building:levels"]').remove();
    if (typeof levels !== 'undefined') {
      $item.append(`<tag k="levels" v="${levels}"/>`);
    }
  }

  getHeight ($item) {
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

  setHeight ($item, height) {
    $item.children('tag[k=height]').remove();
    $item.children('tag[k="building:height"]').remove();
    if (typeof height !== 'undefined') {
      $item.append(`<tag k="height" v="${height}"/>`);
    }
  }

  onSubmit (feature) {
    const minLevels = 0;
    const maxLevels = 500;
    const minHeight = 0;
    const maxHeight = 1500;

    let levels;
    if ($('#editor input[name=levels]').val() !== '') {
      levels = parseFloat($('#editor input[name=levels]').val());
      if (!this.checkNum(levels, minLevels, maxLevels)) {
        console.log('invalid levels', levels);
        return;
      }
    }

    let height;
    if ($('#editor input[name=height]').val() !== '') {
      height = parseFloat($('#editor input[name=height]').val());
      if (!this.checkNum(height, minHeight, maxHeight)) {
        console.log('invalid height', height);
        return;
      }
    }

    // check for changes
    const osmbLevels = feature.properties.levels;
    const osmbHeight = feature.properties.height;
    if (this.compareNum(levels, osmbLevels) && this.compareNum(height, osmbHeight)) {
      return;
    }

    let itemType = 'way';
    let itemId = feature.id;
    if (feature.id[0] === 'r') {
      itemType = 'relation';
      itemId = itemId.substr(1);
    }

    this.osm.readItem(itemType, itemId).then(doc => {
      const $doc = $(doc).find('osm');
      let $item;
      if ($doc.find('relation')) {
        $item = $doc.find('relation');
      } else {
        $item = $doc.find('way');
      }

      let hasChanged = false;

      if (!this.compareNum(levels, this.getLevels($item))) {
        this.setLevels($item, levels);
        hasChanged = true;
      }

      if (!this.compareNum(height, this.getHeight($item))) {
        this.setHeight($item, height);
        hasChanged = true;
      }

      if (hasChanged) {
        this.osm.writeItem($doc);
        // app.emit('FEATURE_UPDATE', data.feature);
      }
    }, err => {
      console.error(err)
    });

    $('#editor').hide();
    $('#button-edit').show();
  }
}
