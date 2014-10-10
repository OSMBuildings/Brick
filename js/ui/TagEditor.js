
Brick.ui.TagEditor = function(config) {
  Brick.Events.prototype.constructor.call(this);

  this.$container = config.container;
  this.$items = this.$container.find('.input');

  this.url = config.url;
};

var proto = Brick.ui.TagEditor.prototype = Object.create(Brick.Events.prototype);

proto.populate = function(data) {
  var tags = data.properties && data.properties.tags || {};

  this.clear();
  $('.overlay-title').text('Part #'+ data.id + (tags.name ? ' ('+ tags.name +')' : ''));

  this.$items.each(function(i, item) {
    if (item.name && tags[ item.name ] !== undefined) {
      item.value = tags[ item.name ];
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

proto.show = function() {
  if (this.$container.is(':hidden')) {
//    $('.overlay-title').text('Feature Part XYZ');
    this.$container.show().animate({ left:0 }, 300);
  }
};

proto.hide = function() {this._isHidden = true;
  if (!this.$container.is(':hidden')) {
    var scope = this;
    this.$container.animate({ left:'100%' }, 300, null, function() {
      scope.$container.hide();
    });
  }
};
