
var Events = (function() {

  function constructor() {
    this.listeners = {};
  }

  var prototype = constructor.prototype;

  prototype.on = function(type, fn) {
    (this.listeners[type] || (this.listeners[type] = [])).push(fn);
  };

  prototype.off = function(type, fn) {
    if (this.listeners[type] === undefined) {
      return;
    }

    this.listeners[type] = this.listeners[type].filter(function(item) {
      return item[0] !== fn;
    });
  };

  prototype.emit = function(type, payload) {
    if (this.listeners[type] === undefined) {
      return;
    }
    setTimeout(function() {
      var typeListeners = this.listeners[type];
      for (var i = 0, len = typeListeners.length; i < len; i++) {
        typeListeners[i](payload);
      }
    }.bind(this), 0);
  };

  prototype.destroy = function() {
    this.listeners = {};
  };

  return constructor;

}());
