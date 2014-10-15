
Brick.Auth = function(bus, config) {
  Brick.Events.prototype.constructor.call(this);

  this.bus = bus;
  var scope = this;

  this.oauth = osmAuth({
    landing: config.landingPage,
    oauth_consumer_key: config.consumerKey,
    oauth_secret: config.secret,
    done: function() {
      /*
      scope.getUserInfo();
      if (!scope.oauth.authenticated()) {
        bus.emit('AUTH_LOGOUT');
      } else {
        scope.getUserInfo();
      }
      */
    }
  });

  if (!this.oauth.authenticated()) {
    bus.emit('AUTH_LOGOUT');
  } else {
    this.getUserInfo();
  }

  bus.on('SESSION_LOGIN', function() {
    this.oauth.authenticate(function() {
      scope.getUserInfo();
    });
  }, this);

  bus.on('SESSION_LOGOUT', function() {
    this.oauth.logout();
    bus.emit('AUTH_LOGOUT');
  }, this);
};

Brick.Auth.prototype = {};

Brick.Auth.prototype.getUserInfo = function() {
  var bus = this.bus;
  this.oauth.xhr({
    method: 'GET',
    path: '/api/0.6/user/details'
  }, function(err, res) {
    var user = JXON.build(res.getElementsByTagName('user')[0]);
    bus.emit('AUTH_LOGIN', user);
  });
};
