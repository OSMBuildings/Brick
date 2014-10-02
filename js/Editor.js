
Brick.Editor = function(config) {
  Brick.Events.prototype.constructor.call(this);

  this.items = document.querySelectorAll('.details .input');

  this.url = config.url;
};

var proto = Brick.Editor.prototype = Object.create(Brick.Events.prototype);

proto.populate = function(data) {
  var items = this.items;
  var tags = data.properties.tags;

  this.clear();

  for (var i = 0, il = items.length; i < il; i++) {
    if (items[i].name && tags[ items[i].name ] !== undefined) {
      items[i].value = tags[ items[i].name ];
    }
  }
};

//  getData: function() {
//    var data = {};
//    for (var i = 0, il = this.items.length; i < il; i++) {
//      this.items[i].name && (data[ this.items[i].name ] = this.items[i].value);
//    }
//    return data;
//  },


proto.clear = function() {
  var items = this.items;
  for (var i = 0, il = items.length; i < il; i++) {
    items[i].value = '';
  }
};
