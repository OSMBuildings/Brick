
Brick.ui.TagEditor = function(bus, config) {
  this.$container = $('#overlay');

  var scope = this;
  this.$container.find('.close-button').click(function() {
    this.blur();
    scope.hide();
  });

  this.$items = this.$container.find('.input');

var $container = this.$container;

  this.$container.find('.color-picker').click(function(i, item) {
    Brick.PhotoColorPicker.capture({ $container: $('#camera-overlay'), callback: function(color) {
$container.find('.color').val(color);
$container.find('.color-picker').css('backgroundColor', color);
    }});
  });

  bus.on('FEATURES_LOADED', function(parts) {
//  if (parts.features.length > 1) {}
    this.populate(parts.features[0]);
  }, this);

  bus.on('FEATURE_FOCUSSED', function(e) {
    this.show();
  }, this);
};

Brick.ui.TagEditor.prototype = {};

Brick.ui.TagEditor.prototype.show = function() {
  if (this.$container.is(':hidden')) {
    this.$container.show().animate({ top:'25%' }, 300);
  }
};

Brick.ui.TagEditor.prototype.hide = function() {this._isHidden = true;
  if (!this.$container.is(':hidden')) {
    var scope = this;
    this.$container.animate({ top:'100%' }, 300, null, function() {
      scope.$container.hide();
    });
  }
};

Brick.ui.TagEditor.prototype.populate = function(data) {
  var tags = data.properties && data.properties.tags || {};

  this.clear();
  $('.title').text('OSM ID '+ data.id + (tags.name ? ' ('+ tags.name +')' : ''));

  var value;
  this.$items.each(function(i, item) {
    value = data[item.name];
    switch(item.name) {
      case 'building':
      case 'building:use':
        value = (value === undefined || value === 'yes') ? '' : '='+ value;
        $(item).find('option[value'+ value +']').attr('selected', 'selected');
      break;

      case 'building:levels':
      case 'roof:levels':
        item.value = (value === undefined) ? '' : value;
      break;

      case 'building:colour':
      case 'roof:colour':
        item.value = (value === undefined) ? '' : value;
      break;

      case 'roof:shape':
        value = (value === undefined || value === 'yes') ? '' : '='+ value;
        $(item).find('option[value'+ value +']').attr('selected', 'selected');
      break;
    }
  });
};

//  getData: function() {
//    var data = {};
//    for (var i = 0, il = this.items.length; i < il; i++) {
//      this.items[i].name && (data[ this.items[i].name ] = this.items[i].value);
//    }
//    return data;
//  },


Brick.ui.TagEditor.prototype.clear = function() {
  this.$items.each(function(i, item) {
    item.value = '';
  });
};
