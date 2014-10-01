
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

  $('#login').addEventListener('click', function() {
    scope.login();
  });

  $('#logout').addEventListener('click', function() {
    scope.logout();
  });
};

var proto = Brick.Session.prototype = Brick.Events.prototype;

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
    $('#login').className = '';
    $('#logout').className = 'hidden';
    $('#user-name').innerText = '';
    $('#user-name').className = 'hidden';
    return;
  }

  this.getUserInfo(function(user) {
    $('#login').className = 'hidden';
    $('#logout').className = '';
    $('#user-name').innerText = user['@display_name'];
    $('#user-name').className = '';
  });
};
