
Brick.ui.Session = function(bus, config) {
  var $container = this.$container = $('#session').append('<button><label></label><img/></button>');

  $container.find('button').click(function() {
    if ($container.is('.authenticated')) {
      bus.emit('SESSION_LOGOUT');
    } else {
      bus.emit('SESSION_LOGIN');
    }
  });

  bus.on('AUTH_LOGIN', this.render, this);
  bus.on('AUTH_LOGOUT', this.render, this);

  this.render();
};

Brick.ui.Session.prototype.render = function(user) {
  var $container = this.$container;
  if (!user) {
    $container.removeClass('authenticated');
    $container.find('label').text('Log in');
    $container.find('img').prop('src', '');
  } else {
    $container.addClass('authenticated');
    $container.find('label').text('Log out');
    $container.find('img').prop('src', user.img['@href']);
  }
};
