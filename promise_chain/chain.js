var Q = require('q');
var request = require('request');

function first_promise() {
		var deferred = Q.defer();
		request('https://www.google.com', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						deferred.resolve('first_promise');
				}
		});
    return deferred.promise;
};

function second_promise() {
		var deferred = Q.defer();
		request('https://www.npmjs.com/package/request', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						deferred.resolve('second_promise');
				}
		});
    return deferred.promise;
};


function third_promise() {
		var deferred = Q.defer();
		request('http://tw.yahoo.com', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						deferred.resolve('third_promise');
				}
		});
    return deferred.promise;
};

function final_promise() {
		var deferred = Q.defer();
		request('https://www.google.com', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						//deferred.resolve('final_promise');
						deferred.reject('final_promise');
				}
		});
    return deferred.promise;
};


first_promise()
.then(function(success) { 
		console.log(success);
		return second_promise();
})
.then(function(success) { 
		console.log(success);
		return third_promise();
})
.then(function(success) {
		console.log(success);
		return final_promise();
}).catch(function(err) {
		console.log('err:\n' + err);
}).done(function(done) {
		console.log('done:\n' + done);
});
