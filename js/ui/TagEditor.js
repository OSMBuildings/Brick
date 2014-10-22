
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

  bus.on('FEATURE_LOADED', function(parts) {
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
  var
    tags = Brick.Data.alignTags(data.properties && data.properties.tags || {}),
    value;

//  this.clear();
  $('.title').text('OSM ID '+ data.id + (tags.name ? ' ('+ tags.name +')' : ''));

  this.$items.each(function(i, item) {
    value = tags[item.name];
    switch(item.name) {
      case 'building':
      case 'building:use':
      case 'roof:shape':
        value = value === undefined ? '' : value;
        $(item).find('option').filter(function() {
          return $(this).html() === value;
        }).prop('selected', true);
      break;

      case 'building:levels':
      case 'roof:levels':
      case 'building:colour':
      case 'roof:colour':
        item.value = (value === undefined) ? '' : value;
      break;
    }
  });

  this.$container.find('#height').text(tags['height'] ? '('+ tags['height'] + 'm)' : '');
  this.$container.find('#roof\\:height').text(tags['roof:height'] ? '('+ tags['roof:height'] + 'm)' : '');
};

//  getData: function() {
//    var data = {};
//    for (var i = 0, il = this.items.length; i < il; i++) {
//      this.items[i].name && (data[ this.items[i].name ] = this.items[i].value);
//    }
//    return data;
//  },


Brick.ui.TagEditor.prototype.clear = function() {
  $('.title').text('');
  this.$items.each(function(i, item) {
    item.value = '';
  });
  this.$container.find('#height').text('');
  this.$container.find('#roof\\:height').text('');
};
