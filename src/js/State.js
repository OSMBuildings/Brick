
var State = {};

(function() {

  // http://mathiasbynens.be/notes/localstorage-pattern#comment-9
  var storage;
  try {
    storage = localStorage;
  } catch (ex) {
    storage = (function() {
      var data = {};
      return {
        getItem: function(k) { return JSON.parse(data[k]); },
        setItem: function(k, v) { data[k] = JSON.stringify(v); },
        removeItem: function(k) { delete data[k]; }
      };
    }());
  }

  State.set = function(k, v) {
    storage.setItem(k, JSON.stringify(v));
  };

  State.get = function(k) {
    return JSON.parse(storage.getItem(k));
  };

  // function isStorable(n) {
  //   return typeof n !== 'object' && typeof n !== 'function' && n !== undefined && n !== null && n !== '';
  // }

}());
