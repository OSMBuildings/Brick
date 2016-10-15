
var Position = new Events();

(function() {

  var options = { timeout: 10000, enableHighAccuracy: false };
  var watchId;

  // Note that, if your page doesn't use HTTPS, this method will fail in
  // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
  Position.start = function() {
    if (!('geolocation' in navigator)) {
      onError({ code: 0, message: 'Geolocation not supported.' });
      return this;
    }

    watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);
    // navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  };

  Position.stop = function() {
    if (navigator.geolocation && navigator.geolocation.clearWatch) {
      navigator.geolocation.clearWatch(watchId);
    }
  };

  // Note that, if your page doesn't use HTTPS, this method will fail in
  // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
  Position.get = function() {
    if (!('geolocation' in navigator)) {
      onError({ code: 0, message: 'Geolocation not supported.' });
      return this;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  };
  
  function onError(code, message) {
    message = message || (code === 1 ? 'permission denied' : (code === 2 ? 'position unavailable' : 'timeout'));
    App.emit('POSITION_ERROR', { code:code, message:message });
  }

  function onSuccess(e) {
    App.emit('POSITION_CHANGE', e.coords);
  }

}());
