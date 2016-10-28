var fs=require('fs');
var async=require('async');

async.parallel( [
	function (callback) {
		fs.readFile ('foo.txt', 'utf-8', callback);
	},
	function (callback) {
		fs.readFile ('bar.txt', 'utf-8', callback);
	},
], function (err, results) {
	console.log(results)
});
