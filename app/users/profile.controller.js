angular.module('fireslack')
  .controller('ProfileCtrl', function($state, md5, auth, profile) {
    var self = this;

    self.profile = profile;

    self.updateProfile = function() {
      profile.emailHash = md5.createHash(auth.password.email);
      profile.$save();

      $state.go('channels');
    };

  });
