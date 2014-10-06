
Brick.Session = function(config) {
  Brick.Events.prototype.constructor.call(this);

  var scope = this;

  this.auth = osmAuth({
    landing: config.landingPage,
    oauth_consumer_key: config.consumerKey,
    oauth_secret: config.secret,
    done: function() {
      scope.render();
    }
  });

  this.render();

  $('#login').click(function() {
    scope.login();
  });

  $('#logout').click(function() {
    scope.logout();
  });
};

var proto = Brick.Session.prototype = Object.create(Brick.Events.prototype);

proto.getUserInfo = function(callback, scope) {
  this.auth.xhr({
    method: 'GET',
    path: '/api/0.6/user/details'
  }, function(err, res) {
    var user = JXON.build(res.getElementsByTagName('user')[0]);
    callback.call(scope, user);
  });
};

proto.login = function() {
  var scope = this;
  this.auth.authenticate(function() {
    scope.render();
    scope.emit('login');
  });
};

proto.logout = function() {
  this.auth.logout();
  this.render();
  this.emit('logout');
};

proto.render = function() {
  if (!this.auth.authenticated()) {
    $('#login').show();
    $('#logout').hide();
    $('#user-name').hide().empty();
    return;
  }

  this.getUserInfo(function(user) {
    $('#login').hide();
    $('#logout').show();
    $('#user-name').text(user['@display_name']).show();
  });
};
