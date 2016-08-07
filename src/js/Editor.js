
var Editor = {};

(function() {

  var configFields = config.editor.fields;

  Editor.init = function() {

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

//    $('#editor').find('.color-picker').click(function(index, input) {
//      // TODO: handle every picker individually
//      PhotoColorPicker.capture({ $('#editor'): $('#camera-overlay'), callback: function(color) {
//        $('#editor').find('.input.color').val(color).css('backgroundColor', color);
//      }});
//    });

    $('#editor-button-close').click(Editor.hide);
  
    Events.on('FEATURE_LOADED', function(feature) {
      // TODO: make complex items readonly + offer iD editor => http://www.openstreetmap.org/edit?way=24273422

      var
        properties = feature.properties,
        tags = properties.tags,
        value;

      $('#editor h1').text(tags.name ? 'Edit "' + tags.name + '"' : 'Edit building');
  
      $('#editor input, #editor select').each(function(index, input) {
        // value = tags[input.name];
        switch(input.name) {
          case 'building':
            value = tags.building || 'yes';
            $(input).find('option').filter(function() {
              return $(this).html() === value;
            }).prop('selected', true);
          break;

          // case 'building:use':
          //   value = tags.buildingUse || '';
          //   $(input).find('option').filter(function() {
          //     return $(this).html() === value;
          //   }).prop('selected', true);
          // break;

          case 'roof:shape':
            value = properties.roofShape || '';
            $(input).find('option').filter(function() {
              return $(this).html() === value;
            }).prop('selected', true);
          break;

          case 'building:levels':
            input.value = properties.levels;
          break;

          case 'roof:levels':
            input.value = properties.roofLevels;
          break;

          case 'building:colour':
            value = properties.color || '';
            input.value = value;
            $('.editor-color-info[name=building\\:colour]').css('background', (value === '') ? 'transparent' : value);
            break;

          case 'roof:colour':
            value = properties.roofColor || '';
            input.value = value;
            $('.editor-color-info[name=roof\\:colour]').css('background', (value === '') ? 'transparent' : value);
          break;
        }
      });

      $('.editor-info[name=height]').text(properties.height ? '(' + properties.height + 'm)' : '');
      $('.editor-info[name=roof\\:height]').text(properties.roofHeight ? '(' + properties.roofHeight + 'm)' : '');

      $('.editor-info[name=building\\:material]').text(properties.material ? '(' + properties.material + ')' : '');
      $('.editor-info[name=roof\\:material]').text(properties.roofMaterial ? '(' + properties.roofMaterial + ')' : '');
    });
  };

  Editor.show = function() {
    $('#editor').fadeIn();
  };

  Editor.hide = function() {
    $('#editor').fadeOut();
  };

}());
