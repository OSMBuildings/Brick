
var Events = {};

(function() {

  var listeners = {};

  Events.on = function(type, fn) {
    (listeners[type] || (listeners[type] = [])).push(fn);
  };

  Events.emit = function(type, payload) {
    if (!listeners[type]) {
      return;
    }
    var l = listeners[type];
    for (var i = 0, il = l.length; i < il; i++) {
      l[i](payload);
    }
  };

}());
