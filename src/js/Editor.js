
var Editor = {};

(function() {

  var configFields = config.editor.fields;

  var isDirty = false;
  var loadedFeature;

  Editor.init = function() {

    // populate select fields

    $('#editor select').each(function(index, input) {
      var
        options = configFields[input.name],
        html = '';
      if (options) {
        for (var i = 0, il = options.length; i < il; i++) {
          html += '<option'+(!i ? ' selected' : '')+'>'+ options[i] +'</option>\n';
        }
        $(input).html(html);
      }
    });

    // initialize pickers

    var buildingColorPicker = new Picker($('#editor *[name=building\\:colour]'), $('#building-color-picker'));
    buildingColorPicker.on('SELECT', function(value) {
      $('#editor *[name=building\\:colour]').val(value).css('border-right-color', (value || 'transparent')).trigger('change');
    });

    var roofColorPicker = new Picker($('#editor *[name=roof\\:colour]'), $('#roof-color-picker'));
    roofColorPicker.on('SELECT', function(value) {
      $('#editor *[name=roof\\:colour]').val(value).css('border-right-color', (value || 'transparent')).trigger('change');
    });

    var roofShapePicker = new Picker($('#editor *[name=roof\\:shape]'), $('#roof-shape-picker'));
    roofShapePicker.on('SELECT', function(value) {
      $('#editor *[name=roof\\:shape]').trigger('change');
    });

    // toggle buttons

    toggleButtons();

    // event handlers

    App.on('LOGIN', toggleButtons);
    App.on('LOGOUT', toggleButtons);
    App.on('FEATURE_SELECT', onFeatureSelect);

    $('#editor input, #editor select').change(onInputChange);

    $('#editor-button-submit').click(function() {
      OSMAPI.writeItem(Data.write(loadedFeature.item, getValues()), CONFIG.editComment)
        .done(function() {
          // TODO update loadedItem
          isDirty = false;
          $('#editor-button-submit').attr('disabled', true);
          $('#editor-button-cancel').attr('disabled', true);
        });
    });

    $('#editor-button-cancel').click(function() {
      // TODO: restore map view
      App.emit('FEATURE_RESET');
      setValues(loadedFeature);
    });
  };

  function toggleButtons() {
    if (OSMAPI.isLoggedIn()) {
      $('#editor-button-submit').show();
      $('#editor-button-cancel').show();
    } else {
      $('#editor-button-submit').hide();
      $('#editor-button-cancel').hide();
    }
  }

  function onInputChange(e) {
    if (!isDirty) {
      isDirty = true;
      $('#editor-button-submit').attr('disabled', false);
      $('#editor-button-cancel').attr('disabled', false);
      // TODO: change map view, disallow new selection
      App.emit('FEATURE_CHANGE', loadedFeature);
    }
  }

  function onFeatureSelect(featureId) {
    // for now, we enable simple objects only
    if (featureId[0] !== 'w') {
      return;
    }

    var
      types = { n:'node', w:'way', r:'relation' },
      itemType = types[ featureId[0] ],
      itemId = featureId.replace(/^\D/, '');

    OSMAPI.readItem(itemType, itemId)
      .done(function(doc) {
        setValues(Data.read(doc));
      });
  }

  function setValues(feature) {
    isDirty = false;
    $('#editor-button-submit').attr('disabled', true);
    $('#editor-button-cancel').attr('disabled', true);

    loadedFeature = feature;

    var
      nameWithId = feature ? 'Building ' + feature.id : 'Building',
      tags = feature ? feature.tags : {};

    document.title = (tags.name ? tags.name + ' - ' : '') + config.appName;
    $('#editor h1').text(tags.name ? tags.name : nameWithId);

    var value;
    $('#editor input, #editor select').each(function(index, input) {
      value = tags[input.name];
      switch(input.name) {
        case 'building':
          $(input).find('option').filter(function() {
            return $(this).html() === (value || 'yes');
          }).prop('selected', true);
          break;

        case 'roof:shape':
          input.value = value || '';
          break;

        case 'building:levels':
        case 'roof:levels':
          input.value = (value !== undefined ? value : '');
          break;

        case 'building:colour':
          input.value = value || '';
          $('#editor *[name=building\\:colour]').css('border-right-color', (value || 'transparent'));
          break;

        case 'roof:colour':
          input.value = value || '';
          $('#editor *[name=roof\\:colour]').css('border-right-color', (value || 'transparent'));
          break;
      }
    });

    $('#editor .info[name=height]').text(tags['height'] !== undefined ? '(' + tags['height'] + 'm)' : '');
    $('#editor .info[name=roof\\:height]').text(tags['roof:height'] !== undefined ? '(' + tags['roof:height'] + 'm)' : '');

    $('#editor .info[name=building\\:material]').text(tags['building:material'] ? '(material: ' + tags['building:material'] + ')' : '');
    $('#editor .info[name=roof\\:material]').text(tags['roof:material'] ? '(material: ' + tags['roof:material'] + ')' : '');
  }

  function getValues() {
    var tags = loadedFeature.tags;

    $('#editor input, #editor select').each(function(index, input) {
      switch(input.name) {
        case 'building':
          tags[input.name] = $(input).find('option:selected').val();
          break;
        case 'roof:shape':
        case 'building:levels':
        case 'roof:levels':
        case 'building:colour':
        case 'roof:colour':
          tags[input.name] = input.value;
          break;
      }
    });

    return tags;
  }

}());
