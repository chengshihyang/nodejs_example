var Q = require('q');
var request = require('request');

function first_promise(data) {
		console.log('call second_promise: ', data);
		var deferred = Q.defer();
		request('https://www.google.com', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						deferred.resolve('first_promise');
				}
		});
    return deferred.promise;
};

function second_promise(data) {
		console.log('call second_promise: ', data);
		var deferred = Q.defer();
		request('https://www.npmjs.com/package/request', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						//deferred.resolve('second_promise');
						deferred.reject('second_promise');
				}
		});
    return deferred.promise;
};


function third_promise(data) {
		console.log('call third_promise: ', data);
		var deferred = Q.defer();
		request('http://tw.yahoo.com', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						deferred.resolve('third_promise');
				}
		});
    return deferred.promise;
};

function final_promise(data) {
		console.log('call final_promise: ', data);
		var deferred = Q.defer();
		request('https://www.google.com', function(error, response, body) {
				if (!error && response.statusCode === 200) {
						console.log(response.headers['content-type']);
						deferred.resolve('final_promise');
				}
		});
    return deferred.promise;
};

function output(data) {
		console.log('output:', data);
}

function failure(data) {
		console.log('failure:', data);
}

var funcs=[first_promise, second_promise, third_promise, final_promise, output];


var result = Q('start');
funcs.forEach(function (f) {
		result = result.then(f);
});
