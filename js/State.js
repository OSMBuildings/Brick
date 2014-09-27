
Brick.State = (function() {

  var REPEAT_TIMEOUT = 500;

  // http://mathiasbynens.be/notes/localstorage-pattern#comment-9
  var storage;
  try {
    storage = localStorage;
  } catch (ex) {}

  storage = storage || (function() {
    var s = {};
    return {
      getItem: function(k) { return s[k]; },
      setItem: function(k, v) { s[k] = v; },
      removeItem: function(k) { delete s[k]; }
    };
  })();

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

  function setLocalStorage(data) {
    var k, v;
    for (k in data) {
      v = data[k];
      if (data.hasOwnProperty(k) && isStorable(v)) {
        storage.setItem(k, v);
      }
    }
  }

  function getLocalStorage(data) {
    var k;
    data = data || {};
    for (k in storage){
      data[k] = storage.getItem(k);
    }
    return data;
  }

  function merge(dst, src) {
    for (var k in src){
      dst[k] = src[k];
    }
    return dst;
  }

  var timer;

  return {
    save: function(data) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        setLocalStorage(data);
        setUrlParams(data);
      }, REPEAT_TIMEOUT);
    },

    load: function() {
      var data = getLocalStorage();
      return merge(data, getUrlParams());
    }
  };

}());
