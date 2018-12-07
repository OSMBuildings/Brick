
class Editor {

  constructor () {
    this.osm = new OSMAPI(config.OSMAPI);

    app.on('PLACE_SELECTED', place => {
      this.selectedFeature = null;
      $('#editor').hide();
    });

    app.on('BUILDING_SELECTED', parts => {
      this.selectedFeature = null;
      $('#editor').hide();
    });

    app.on('PART_SELECTED', part => {
      this.selectedFeature = part;
      const properties = this.selectedFeature.properties;
      $('input[name=levels]').val(properties['levels'] !== undefined ? properties['levels'] : '');
      $('input[name=height]').val(properties['height'] !== undefined ? properties['height'] : '');

      $('#editor').show();

      if (!this.osm.isLoggedIn()) {
        $('#login').show();
        $('#editor form').hide();
        $('#message').hide();
      } else {
        $('#login').hide();
        $('#editor form').show();
        $('#message').hide();
      }
    });

    $('#login button[name=button-login]').click(e => {
      this.osm.login().then(() => {
        app.emit('OSM_LOGIN');
      });
    });

    $('#editor button[name=button-cancel]').click(e => {
      const properties = this.selectedFeature.properties;
      $('input[name=levels]').val(properties['levels'] !== undefined ? properties['levels'] : '');
      $('input[name=height]').val(properties['height'] !== undefined ? properties['height'] : '');
    });

    $('#editor button[name=button-submit]').click(e => {
      this.onSubmit();
    });

    app.on('OSM_LOGIN', e => {
      $('#login').hide();
      $('#editor form').show();
    });

    app.on('OSM_CHANGE', e => {
      $('#editor').show();
      $('#login').hide();
      $('#editor form').hide();
      $('#message').show();
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

  onSubmit () {
    const minLevels = 0;
    const maxLevels = 500;
    const minHeight = 0;
    const maxHeight = 1500;

    let newLevels;
    if ($('#editor input[name=levels]').val() !== '') {
      newLevels = parseFloat($('#editor input[name=levels]').val());
      if (!this.checkNum(newLevels, minLevels, maxLevels)) {
        console.log('invalid levels', newLevels);
        return;
      }
    }

    let newHeight;
    if ($('#editor input[name=height]').val() !== '') {
      newHeight = parseFloat($('#editor input[name=height]').val());
      if (!this.checkNum(newHeight, minHeight, maxHeight)) {
        console.log('invalid height', newHeight);
        return;
      }
    }

    // check for changes
    const feature = this.selectedFeature;
    const properties = feature.properties;
    if (this.compareNum(newLevels, properties.levels) && this.compareNum(newHeight, properties.height)) {
      // there are no local changes
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
      if ($doc.find('relation').length) {
        $item = $doc.find('relation');
      } else {
        $item = $doc.find('way');
      }

      // are there changes compared to OSM?

      let hasChanged = false;

      if (!this.compareNum(newLevels, this.getLevels($item))) {
        this.setLevels($item, newLevels);
        hasChanged = true;
      }

      if (!this.compareNum(newHeight, this.getHeight($item))) {
        this.setHeight($item, newHeight);
        hasChanged = true;
      }

      if (hasChanged) {
        this.osm.writeItem($doc);
        // TODO: handle FAIL, NOCHANGE, update selected item
        app.emit('OSM_CHANGE');
      }
    }, err => {
      console.error(err)
    });
  }
}
