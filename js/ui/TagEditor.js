
Brick.ui.TagEditor = function(config) {
  Brick.Events.prototype.constructor.call(this);

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
};

var proto = Brick.ui.TagEditor.prototype = Object.create(Brick.Events.prototype);

proto.show = function() {
  if (this.$container.is(':hidden')) {
    this.$container.show().animate({ top:'25%' }, 300);
  }
};

proto.hide = function() {this._isHidden = true;
  if (!this.$container.is(':hidden')) {
    var scope = this;
    this.$container.animate({ top:'100%' }, 300, null, function() {
      scope.$container.hide();
    });
  }
};

proto.populate = function(data) {
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


proto.clear = function() {
  this.$items.each(function(i, item) {
    item.value = '';
  });
};
