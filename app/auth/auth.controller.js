angular.module('fireslack')
  .controller('AuthCtrl', function(Auth, $state) {
    var self = this;

    self.user = {
        email: '',
        passsword: ''
    };

    self.login = function() {
      Auth.$authWithPassword(self.user)
        .then(function(auth) {
          $state.go('home');
        }, function(error) {
          self.error = error;
        });
    };

    self.register = function() {
      Auth.$createUser(self.user)
        .then(function(auth) {
          self.login();
        }, function(error) {
          self.error = error;
        });
    };


  });
