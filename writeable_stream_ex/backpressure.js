var chance = require('chance').Chance();
require('http').createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		function generateMore() {             //[1]
				while(chance.bool({likelihood: 95})) {
						console.log('while loop...');
						var shouldContinue = res.write(chance.string({
								length: 128*1024, 
						}));
					  if(!shouldContinue) {             //[3]
							console.log('Backpressure');
							return res.once('drain', generateMore);
						}
				}
			  res.end('\nThe end...\n', function() {
						console.log('All data was sent');
			  });
			}
		  generateMore();
}).listen(8080, function () {
		  console.log('Listening');
});
