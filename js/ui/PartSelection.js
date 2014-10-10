
Brick.ui.PartSelection = function(options) {
  Brick.Events.prototype.constructor.call(this);

  this.items = [];
  this.selectedIndex = -1;

  this.$container = options.container;
  this.$list = this.$container.find('.list');

  this.renderer = options.renderer || function(data) {
    return JSON.stringify(data);
  };

  var scope = this;
  this.$list.click(function(e) {
    scope.$list.children().each(function(i, child) {
      if (e.target === child) {
        scope.selectIndex(i);
        scope.emit('partSelected', scope.items[i].data);
      }
    });
  });
};

var proto = Brick.ui.PartSelection.prototype = Object.create(Brick.Events.prototype);

proto.selectIndex = function(index) {
  if (this.selectedIndex === index) {
    return;
  }

  // unselect old item
  this.items[this.selectedIndex] && this.items[this.selectedIndex].$node.removeClass('selected');

  // no new selection
  if (index === -1) {
    this.selectedIndex = -1;
    return;
  }

  if (!this.items[index]) {
    return;
  }

  // set new selection
  this.selectedIndex = index;

  this.items[this.selectedIndex].$node.addClass('selected');
};

proto.addItem = function(data) {
  var $node = $('<li class="list-item">' + this.renderer(data) +'</li>')
    .appendTo(this.$list);

  this.items.push({
    $node: $node,
    data: data
  });
};

proto.clear = function() {
  this.selectedIndex = -1;
  this.$list.empty();
  this.items = [];
  this.$container.scrollTop = 0;
};

proto.populate = function(collection) {
  this.clear();
  $('.overlay-title').text('Select Feature Part');
  for (var i = 0, il = collection.features.length; i < il; i++) {
    this.addItem(collection.features[i]);
  }

  if (collection.features.length === 1) {
    this.selectIndex(0);
  }
};

proto.show = function() {
  if (this.$container.is(':hidden')) {
    this.$container.show().animate({ left:0 }, 300);
  }
};

proto.hide = function() {this._isHidden = true;
  if (!this.$container.is(':hidden')) {
    var scope = this;
    this.$container.animate({ left:'-100%' }, 300, null, function() {
      scope.$container.hide();
    });
  }
};
