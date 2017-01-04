var RandomStream = require('./randomStream.js');
var randomStream = new RandomStream();

randomStream.on('readable', function() {
		var chunk;
		while((chunk = randomStream.read()) !== null) {
				console.log("Chunk received: " + chunk.toString());
		}
});
