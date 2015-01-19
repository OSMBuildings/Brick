
var State = (function() {

  // http://mathiasbynens.be/notes/localstorage-pattern#comment-9
  var storage;
  try {
    storage = localStorage;
  } catch (ex) {
    storage = (function() {
      var data = {};
      return {
        getItem: function(k) { return data[k]; },
        setItem: function(k, v) { data[k] = v; },
        removeItem: function(k) { delete data[k]; }
      };
    }());
  }

  var data = {};
  for (var key in storage){
    data[key] = storage.getItem(key);
  }

  return {
    set: function(key, value) {
      storage.setItem(key, (data[key] = value));
    },

    get: function(key) {
      return data[key];
    }
  };

/***
  var REPEAT_TIMEOUT = 500;

  function isStorable(n) {
    return typeof n !== 'object' && typeof n !== 'function' && n !== undefined && n !== null && n !== '';
  }

  function setUrlParams(data) {
    if (!history.replaceState) {
      return;
    }
    var k, v, params = [];
    for (k in data) {
      v = data[k];
      if (data.hasOwnProperty(k) && isStorable(v)) {
        params.push(encodeURIComponent(k) +'='+ encodeURIComponent(v));
      }
    }
    history.replaceState(data, '', '?'+ params.join('&'));
  }

  function getUrlParams(data) {
    var params;
    data = data || {};
    if (!(params = location.search)) {
        return data;
    }
    params = params.substring(1).replace( /(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  function merge(dst, src) {
    for (var k in src){
      dst[k] = src[k];
    }
    return dst;
  }
***/

}());
