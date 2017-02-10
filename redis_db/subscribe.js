var redis = require("redis");
var sub = redis.createClient(), pub = redis.createClient();
var msg_count = 0;

sub.on("subscribe", function (channel, count) {
		console.log(channel);
		console.log(count);
});

sub.on("message", function (channel, message) {
		    console.log("sub channel " + channel + ": " + message);
		    msg_count += 1;
});

sub.subscribe("a nice channel");


setInterval(() => {
		if (pub !== undefined && pub.connected) {
				for (var i=0; i<3000; i++) {
				  pub.publish('a nice channel', new Date());
				}
		}
}, 1000);

