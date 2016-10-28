var redis = require ('redis');
var bluebird = require ('bluebird');

client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


//client.getAsync('foo').then(function(res) {
//	    console.log(res); // => 'bar'
//});

client.hkeysAsync("hash key").then(function (res) {
	console.log(res);
	//console.log(replies.length + " replies:");
	//replies.forEach(function (reply, i) {
	//	console.log("    " + i + ": " + reply);
	//});
});


//return client.multi().get('foo').execAsync().then(function(res) {
//	    console.log(res); // => 'bar'
//});
