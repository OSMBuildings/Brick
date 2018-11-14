



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

    // var buildingColorPicker = new Picker($('#editor *[name=building\\:colour]'), $('#building-color-picker'));
    // buildingColorPicker.on('SELECT', function(value) {
    //   $('#editor *[name=building\\:colour]').val(value).css('border-right-color', (value || 'transparent')).trigger('keyup');
    // });
    //
    // var roofColorPicker = new Picker($('#editor *[name=roof\\:colour]'), $('#roof-color-picker'));
    // roofColorPicker.on('SELECT', function(value) {
    //   $('#editor *[name=roof\\:colour]').val(value).css('border-right-color', (value || 'transparent')).trigger('keyup');
    // });
    //
    // var roofShapePicker = new Picker($('#editor *[name=roof\\:shape]'), $('#roof-shape-picker'));
    // roofShapePicker.on('SELECT', function(value) {
    //   $('#editor *[name=roof\\:shape]').trigger('keyup');
    // });

    // toggle buttons

    toggleButtons();

    // event handlers

    App.on('LOGIN', toggleButtons);
    App.on('LOGOUT', toggleButtons);
    App.on('FEATURE_SELECT', onFeatureSelect);

    $('#editor select').change(onInputChange);
    $('#editor input').keyup(onInputChange);
    $('#editor input').change(onInputChange);

    $('#editor-button-submit').click(function() {
      OSMAPI.writeItem(Data.write(loadedFeature.data, getValues()), config.editComment)
        .done(function() {
          // TODO update loadedItem
          // TODO reset view
          isDirty = false;
          $('#editor-button-submit').attr('disabled', true);
          $('#editor-button-cancel').attr('disabled', true);

          // restore map view
          App.emit('FEATURE_RESET');
        });
    });

    $('#editor-button-cancel').click(function() {
      App.emit('FEATURE_RESET');
      setValues(loadedFeature);
    });
  };

  function toggleButtons() {

    // if (OSMAPI.isLoggedIn()) {
      $('#editor-button-submit').show();
    // } else {
    //   $('#editor-button-submit').hide();
    // }
  }

  function onInputChange(e) {
    if (!isDirty) {
      isDirty = true;
      $('#editor-button-submit').attr('disabled', false);
      $('#editor-button-cancel').attr('disabled', false);
    }

    App.emit('FEATURE_CHANGE', { id:loadedFeature.id, tags:getValues(), nodes:loadedFeature.nodes, data:loadedFeature.data });
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
      nameWithId = feature ? 'Building ' + feature.id : 'Select building',
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

    $('#editor .info[name=building\\:material]').text(tags['building:material'] !== undefined ? '(material: ' + tags['building:material'] + ')' : '');
    $('#editor .info[name=roof\\:material]').text(tags['roof:material'] !== undefined ? '(material: ' + tags['roof:material'] + ')' : '');
  }

  function getValues() {
    var tags = loadedFeature.tags;

    $('#editor input, #editor select').each(function(index, input) {
      switch(input.name) {
        case 'building':
          // there should always be a value
          tags[input.name] = $(input).find('option:selected').val();
          break;
        case 'roof:shape':
        case 'building:colour':
        case 'roof:colour':
          if (input.value) {
            tags[input.name] = input.value;
          }
          break;
        case 'building:levels':
        case 'roof:levels':
          var value = parseFloat(input.value);
          if (!isNaN(value)) {
            tags[input.name] = value;
          }
          break;
      }
    });

    return tags;
  }

}());
