
var Auth = {};

(function() {

  var auth = osmAuth({
    landing: config.auth.landingPage,
    oauth_consumer_key: config.auth.consumerKey,
    oauth_secret: config.auth.secret
  });

  Auth.isLoggedIn = function() {
    return auth.authenticated();
  };

  Auth.login = function() {
    auth.authenticate(function() {
      if (!auth.authenticated()) {
        return;
      }
      auth.xhr({
        method: 'GET',
        accept: 'application/json',
        path: '/api/0.6/user/details.json'
      }, function(err, doc) {
        var user = JXON.build(doc.getElementsByTagName('user')[0]);
        Events.emit('LOGIN', user);
      });
    });
  };

  Auth.logout = function() {
    auth.logout();
    Events.emit('LOGOUT');
  };

  // Events.on('SESSION_LOGIN', function() {
  //   Auth.authenticate(function() {
  //     getUserInfo();
  //   });
  // });

  // Events.on('SESSION_LOGOUT', function() {
  //   Auth.logout();
  //   Events.emit('LOGOUT');
  // });

}());
