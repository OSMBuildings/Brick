


// Events.on('FEATURE_LOADED', function(feature) {
//   var tags = feature.properties || {};
//   var title = tags.name ? tags.name +' (ID '+ feature.id +')' : 'Building ID '+ feature.id;
//   document.title = title +' - Brick';
// });

(function() {

  var $editor, $fields;

  $(function() {
    $editor = $('#editor');
    $fields = $editor.find('.input');

    var configFields = config.editor.fields;

    $editor.find('select').each(function(_, field) {
      if (configFields[ field.name ]) {
        var options = configFields[ field.name ];
        var html = '';
        for (var i = 0; i < options.length; i++) {
          html += '<option>'+ options[i] +'</option>\n';
        }
        $(field).append(html);
      }
    });

//    $editor.find('.color-picker').click(function(i, field) {
//      // TODO: handle every picker individually
//      PhotoColorPicker.capture({ $editor: $('#camera-overlay'), callback: function(color) {
//        $editor.find('.input.color').val(color).css('backgroundColor', color);
//      }});
//    });
  });

  // TODO: should be done on top level
  Events.on('FEATURE_SELECTED', function(featureId) {
    show();
  });

  Events.on('FEATURE_LOADED', function(feature) {
    // TODO: make complex items readonly + offer iD editor
    // http://www.openstreetmap.org/edit?way=24273422

    var
      tags = feature.properties.tags || {},
      value;

    clear();

    var title = tags.name ? tags.name +' (ID '+ feature.id +')' : 'Building ID '+ feature.id;
    $editor.find('h2').text(title);

    $fields.each(function(_, field) {
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

    $editor.find('#height-hint').text(tags['height'] ? tags['height'] +'m' : '');
    $editor.find('#roof\\:height-hint').text(tags['roof:height'] ? tags['roof:height'] +'m' : '');

    $editor.find('#building\\:material-hint').text(tags['building:material'] ? tags['building:material'] : '');
    $editor.find('#roof\\:material-hint').text(tags['roof:material'] ? tags['roof:material'] : '');
  });

  Events.on('FEATURE_CLEARED', function() {
    hide();
  });

  function show() {
    $('#info').hide();
    $editor.show();
  }

  function hide() {
    $editor.hide();
    $('#info').show();
  }

  function clear() {
    $editor.find('h2').text('');

    $fields.each(function(i, field) {
      field.value = '';
    });

    $editor.find('.color').css('background-color', '');
    $editor.find('.hint').text('');
  }

}());
