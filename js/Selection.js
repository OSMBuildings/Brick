
Brick.Selection = function(options) {
  Brick.Events.prototype.constructor.call(this);

  this.items = [];
  this.selectedIndex = -1;

  this.container = options.container;

  this.renderer = options.renderer || function(data) {
    return JSON.stringify(data);
  };

  var scope = this;
  this.container.addEventListener('mousedown', function(e) {
    for (var i = 0, il = scope.container.childNodes.length; i < il; i++) {
      if (Brick.dom.contains(scope.container.childNodes[i], e.target)) {
        scope.selectIndex(i);
        scope.emit('selectPart', scope.items[i].data);
        break;
      }
    }
  });
};

var proto = Brick.Selection.prototype = Object.create(Brick.Events.prototype);

proto.selectIndex = function(index) {
  if (this.selectedIndex === index) {
    return;
  }

  // unselect old item
  this.items[this.selectedIndex] && Brick.dom.removeClass(this.items[this.selectedIndex].el, 'selected');

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

  Brick.dom.addClass(this.items[this.selectedIndex].el, 'selected');
};

proto.addItem = function(data) {
  var el = document.createElement('DIV');
  el.innerHTML = this.renderer(data);

  this.items.push({
    el: el,
    data: data
  });

  this.container.appendChild(el);
};

proto.clear = function() {
  this.selectedIndex = -1;
  this.container.innerHTML = '';
  this.items = [];
  this.container.scrollTop = 0;
};

proto.populate = function(collection) {
  this.clear();
  for (var i = 0, il = collection.features.length; i < il; i++) {
    this.addItem(collection.features[i]);
  }

  if (collection.features.length === 1) {
    this.selectIndex(0);
    this.emit('selectPart', this.items[0].data);
  }
};
