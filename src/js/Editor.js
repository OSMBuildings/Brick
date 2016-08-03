
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
        tags = feature.properties || {},
        value;
console.log(tags);
      $('#editor h1').text(tags.name ? 'Edit "' + tags.name + '"' : 'Edit building');
  
      $('#editor input, #editor select').each(function(index, input) {
        value = tags[input.name];
        switch(input.name) {
          case 'building':
            $(input).find('option').filter(function() {
              return $(this).html() === (value || 'yes');
            }).prop('selected', true);
            break;
  
          case 'building:use':
          case 'roof:shape':
            $(input).find('option').filter(function() {
              return $(this).html() === (value || '');
            }).prop('selected', true);
          break;
  
          case 'building:levels':
          case 'roof:levels':
            input.value = (value === undefined) ? '' : value;
          break;
  
          case 'building:colour':
            input.value = (value === undefined) ? '' : value;
            $('#editor-info[building\\:colour]').css('backgroundColor', (value === undefined) ? 'transparent' : value);
            break;

          case 'roof:colour':
            input.value = (value === undefined) ? '' : value;
            $('#editor-info[roof\\:colour]').css('backgroundColor', (value === undefined) ? 'transparent' : value);
          break;
        }
      });

      $('.editor-info[name=height]').text(tags['height'] ? tags['height'] + 'm' : '');
      $('.editor-info[roof\\:height]').text(tags['roof:height'] ? tags['roof:height'] +'m' : '');

      $('.editor-info[building\\:material]').text(tags['building:material'] ? tags['building:material'] : '');
      $('#editor-info[roof\\:material]').text(tags['roof:material'] ? tags['roof:material'] : '');
    });
  };

  Editor.show = function() {
    $('#editor').show();
  };

  Editor.hide = function() {
    $('#editor').hide();
  };

}());
