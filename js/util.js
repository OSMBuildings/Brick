
function loadJSON(url, callback, scope) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState !== 4) {
      return;
    }
    if (!req.status || req.status < 200 || req.status > 299) {
      return;
    }

    callback.call(scope, JSON.parse(req.responseText));
  };
  req.open('GET', url);
  req.send(null);
}
