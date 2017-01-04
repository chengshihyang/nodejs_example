function OnlineState(failsafeSocket) {
  this.failsafeSocket = failsafeSocket;
}

module.exports = OnlineState;

OnlineState.prototype.send = function(data) {
  this.failsafeSocket.socket.write(data);
};

//[1]
OnlineState.prototype.activate = function() {
  var self = this;

  self.failsafeSocket.queue.forEach(function(data) {
    self.failsafeSocket.socket.write(data);
  });

  self.failsafeSocket.queue = [];

  self.failsafeSocket.socket.once('error', function() {
    self.failsafeSocket.changeState('offline');
	});
}
