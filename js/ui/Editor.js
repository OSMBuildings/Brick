
(function() {

  var $editor, $fields;

  $(function() {
    $editor = $('#editor');
    $fields = $editor.find('.input');

//    $editor.find('.color-picker').click(function(i, field) {
//      // TODO: handle every picker individually
//      PhotoColorPicker.capture({ $editor: $('#camera-overlay'), callback: function(color) {
//        $editor.find('.input.color').val(color).css('backgroundColor', color);
//      }});
//    });
  });

  Bus.on('FEATURE_LOADED', function(parts) {
//  if (parts.features.length > 1) {}
    populate(parts.features[0]);
    show();
  });

  function show() {
//    if ($editor.is(':hidden')) {
//      this.$editor.show().animate({ top:'25%' }, 300);
//    }
  }

  function hide() {
//    if (!$editor.is(':hidden')) {
//      $editor.animate({ top:'100%' }, 300, null, function() {
//        $editor.hide();
//      });
//    }
  }

  function populate(data) {
    var
      tags = Data.alignTags(data.properties && data.properties.tags || {}),
      value;

    clear();
    $('.title').text('OSM ID '+ data.id + (tags.name ? ' ('+ tags.name +')' : ''));

    $fields.each(function(i, field) {
      value = tags[field.name];
      switch(field.name) {
        case 'building':
        case 'building:use':
        case 'roof:shape':
          value = (value === undefined ? '' : value);
          $(field).find('option').filter(function() {
            return $(this).html() === value;
          }).prop('selected', true);
        break;

        case 'building:levels':
        case 'roof:levels':
          field.value = (value === undefined) ? '' : value;
        break;

        case 'building:colour':
        case 'roof:colour':
          field.value = (value === undefined) ? '' : value;
          field.style.backgroundColor = (value === undefined) ? '' : value;
        break;
      }
    });

  //$editor.find('#height-hint').text(tags['height'] ? '('+ tags['height'] +'m)' : '');
  //$editor.find('#roof\\:height-hint').text(tags['roof:height'] ? '('+ tags['roof:height'] +'m)' : '');

  //$editor.find('#building\\:material-hint').text(tags['building:material'] ? '('+ tags['building:material'] +')' : '');
  //$editor.find('#roof\\:material-hint').text(tags['roof:material'] ? '('+ tags['roof:material'] +')' : '');
};

//  getData: function() {
//    var data = {};
//    for (var i = 0, il = this.fields.length; i < il; i++) {
//      this.fields[i].name && (data[ this.fields[i].name ] = this.fields[i].value);
//    }
//    return data;
//  },

  function clear() {
    $('.title').text('');
    $fields.each(function(i, field) {
      field.value = '';
    });

//  $editor.find('.color-picker').css('background-color', '');
//
//  $editor.find('#height-hint').text('');
//  $editor.find('#roof\\:height-hint').text('');
//
//  $editor.find('#building\\:material-hint').text('');
//  $editor.find('#roof\\:material-hint').text('');
  }

}());
