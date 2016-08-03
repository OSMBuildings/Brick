
(function() {

  var $button;

  function update(user) {
    if (!user) {
      $button.removeClass('authenticated');
      $button.find('label').text('Log in');
      $button.find('img').prop('src', '');
    } else {
      $button.addClass('authenticated');
      $button.find('label').text('Log out');
      $button.find('img').prop('src', user.img['@href']);
    }
    $button.blur();
  }

  $(function() {
    $button = $('#login-button');

    $button.click(function() {
      if ($button.is('.authenticated')) {
        Events.emit('SESSION_LOGOUT');
      } else {
        Events.emit('SESSION_LOGIN');
      }
    });

    Events.on('AUTH_LOGIN', update);
    Events.on('AUTH_LOGOUT', update);

    update();
  });

}());