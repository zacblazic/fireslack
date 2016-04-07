angular.module('fireslack')
  .controller('MessagesCtrl', function(profile, channelName, messages) {
    var self = this;

    self.profile = profile;
    self.channelName = channelName;
    self.messages = messages;

    self.message = '';

    self.sendMessage = function() {
      if (self.message.length > 0) {
        self.messages.$add({
          uid: profile.$id,
          body: self.message,
          timestamp: Firebase.ServerValue.TIMESTAMP
        }).then(function() {
          self.message = '';
        });
      }
    }
  });
