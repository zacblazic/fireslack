angular.module('fireslack')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels) {
    var self = this;

    Users.setOnline(profile.$id);

    self.profile = profile;
    self.channels = channels;
    self.users = Users.all;

    self.getDisplayName = Users.getDisplayName;
    self.getGravatar = Users.getGravatar;

    self.logout = function() {
      self.profile.online = null;
      self.profile.$save().then(function() {
        Auth.$unauth();
        $state.go('home');
      });
    };

    self.newChannel = {
      name: ''
    };

    self.createChannel = function() {
      self.channels.$add(self.newChannel).then(function(ref) {
        $state.go('channels.messages', { channelId: ref.key() });
      });
    };

  });
