
var Editor = {};

(function() {

  var configFields = config.editor.fields;

  var isDirty = false;
  var loadedItem;

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

    if (OSMAPI.isLoggedIn()) {
      $('#editor-button-submit').show();
    } else {
      $('#editor-button-submit').hide();
    }

//    $('#editor').find('.color-picker').click(function(index, input) {
//      // TODO: handle every picker individually
//      PhotoColorPicker.capture({ $('#editor'): $('#camera-overlay'), callback: function(color) {
//        $('#editor').find('.input.color').val(color).css('backgroundColor', color);
//      }});
//    });

    Events.on('LOGIN', function() {
      $('#editor-button-submit').show();
    });

    Events.on('LOGOUT', function() {
      $('#editor-button-submit').hide();
    });

    Events.on('ITEM_LOADED', function(item) {
      loadedItem = item;

      // TODO: make complex items readonly + offer iD editor => http://www.openstreetmap.org/edit?way=24273422

      var itemType = item.way ? 'way' : 'relation';

      var t, tags = {};
      if (item[itemType].tag) {
        for (var i = 0, il = item[itemType].tag.length; i<il; i++) {
          t = item[itemType].tag[i];
          tags[t['@k']] = t['@v'];
        }
      }

      var value;

      document.title = (tags.name ? tags.name + ' - ' : '') + config.appName;
      $('#editor h1').text(tags.name ? tags.name : 'Building ' + item[itemType]['@id']);
  
      $('#editor input, #editor select').each(function(index, input) {
        value = tags[input.name];
        switch(input.name) {
          case 'building':
            $(input).find('option').filter(function() {
              return $(this).html() === (value || 'yes');
            }).prop('selected', true);
          break;

          // case 'building:use':
          //   $(input).find('option').filter(function() {
          //     return $(this).html() === (value || '');
          //   }).prop('selected', true);
          // break;

          case 'roof:shape':
            $(input).find('option').filter(function() {
              return $(this).html() === (value || '');
            }).prop('selected', true);
          break;

          case 'building:levels':
          case 'roof:levels':
            input.value = (value !== undefined ? value : '');
          break;

          case 'building:colour':
            input.value = value || '';
            $('#editor .color-info[name=building\\:colour]').css('background', (value || 'transparent'));
            break;

          case 'roof:colour':
            input.value = value || '';
            $('#editor .color-info[name=roof\\:colour]').css('background', (value || 'transparent'));
          break;
        }
      });

      $('#editor .info[name=height]').text(tags['height'] !== undefined ? '(' + tags['height'] + 'm)' : '');
      $('#editor .info[name=roof\\:height]').text(tags['roofHeight'] !== undefined ? '(' + tags['roofHeight'] + 'm)' : '');

      $('#editor .info[name=building\\:material]').text(tags['material'] ? '(' + tags['material'] + ')' : '');
      $('#editor .info[name=roof\\:material]').text(tags['roofMaterial'] ? '(' + tags['roofMaterial'] + ')' : '');
    });

    $('#editor input, #editor select').change(function() {
      isDirty = true;
    });

    $('#editor-button-submit').click(function() {
      OSMAPI.write(loadedItem, CONFIG.editComment).done(function() {
        isDirty = false;
      });
    });
  };

}());
