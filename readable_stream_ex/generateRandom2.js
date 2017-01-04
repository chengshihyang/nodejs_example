var RandomStream = require('./randomStream.js');
var randomStream = new RandomStream();

randomStream.on('data', function(chunk) {
		console.log("Chunk received: " + chunk.toString());
});

//randomStream.on('end', function(chunk) {
//		console.log('end');
//});
