
var User = {};

(function() {

  function onLogin() {
    // OSMAPI.getUserInfo().done(function(user) {
    //   console.log('user', user);
    // });
    $('#login').hide();
  }

  function onLogout() {
    $('#login').show();
  }

  App.on('LOGIN', onLogin);
  App.on('LOGOUT', onLogout);

  User.init = function() {
    if (OSMAPI.isLoggedIn()) {
      onLogin();
    } else {
      onLogout();
    }

    $('#login-button-in').click(function(e) {
      e.stopPropagation();
      OSMAPI.login();
    });

    // $('#login-button-out').click(function(e) {
    //   e.stopPropagation();
    //   OSMAPI.logout();
    // });
  };

}());
