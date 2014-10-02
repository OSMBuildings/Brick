
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

  Brick.dom.find('#login').addEventListener('click', function() {
    scope.login();
  });

  Brick.dom.find('#logout').addEventListener('click', function() {
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
    Brick.dom.removeClass(Brick.dom.find('#login'), 'hidden');
    Brick.dom.addClass(Brick.dom.find('#logout'), 'hidden');
    Brick.dom.find('#user-name').innerText = '';
    Brick.dom.addClass(Brick.dom.find('#user-name'), 'hidden');
    return;
  }

  this.getUserInfo(function(user) {
    Brick.dom.addClass(Brick.dom.find('#login'), 'hidden');
    Brick.dom.removeClass(Brick.dom.find('#logout'), 'hidden');
    Brick.dom.find('#user-name').innerText = user['@display_name'];
    Brick.dom.removeClass(Brick.dom.find('#user-name'), 'hidden');
  });
};
