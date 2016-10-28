var Bagpipe = require('bagpipe');
var fs = require('fs');
var bagpipe = new Bagpipe(4, {
	refuse: true,
	timeout: 3000
});


bagpipe.on('full', function (length) {
	console.log("full: " + length);
});

for (var i=0; i<20; i++) {
	console.log(i)
	bagpipe.push(fs.readFile, "bar.txt", 'utf-8', function (err, data) {
		if (err) {
		  console.log(err);
		}
		if (data) {
		  console.log(data);
		}
	});
}
