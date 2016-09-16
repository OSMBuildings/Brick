
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

    var buildingColorPicker = new Picker($('#editor *[name=building\\:colour]'), $('#building-color-picker'));
    buildingColorPicker.on('SELECT', function(value) {
      $('#editor *[name=building\\:colour]').val(value).css('border-right-color', (value || 'transparent'));
    });

    var roofColorPicker = new Picker($('#editor *[name=roof\\:colour]'), $('#roof-color-picker'));
    roofColorPicker.on('SELECT', function(value) {
      $('#editor *[name=roof\\:colour]').val(value).css('border-right-color', (value || 'transparent'));
    });

    var roofShapePicker = new Picker($('#editor *[name=roof\\:shape]'), $('#roof-shape-picker'));

    if (OSMAPI.isLoggedIn()) {
      $('#editor-button-submit').show();
    } else {
      $('#editor-button-submit').hide();
    }

    App.on('LOGIN', function() {
      $('#editor-button-submit').show();
    });

    App.on('LOGOUT', function() {
      $('#editor-button-submit').hide();
    });

    App.on('ITEM_LOAD', function(item) {
      loadedItem = item;

      // TODO: make complex items readonly + offer iD editor => http://www.openstreetmap.org/edit?way=24273422

      var itemType = item.way ? 'way' : 'relation';

      var tags = Data.read(item[itemType].tag);

      document.title = (tags.name ? tags.name + ' - ' : '') + config.appName;
      $('#editor h1').text(tags.name ? tags.name : 'Building ' + item[itemType]['@id']);

      var value;
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
