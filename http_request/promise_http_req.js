var http = require('http');
var Q = require('q');

var googleNewsOptions = {
	  hostname: 'ajax.googleapis.com',
	  path: '/ajax/services/search/news?v=1.0&q=nodejs',
	  method: 'GET'
};


function promisedRequest(requestOptions) {
	var deferred = Q.defer();

	var req = http.request (requestOptions, function (response) {
		response.setEncoding('utf8');
		var responseData = '';
		response.on('data', function(data) {
			responseData += data;
		});
		response.on('end', function() {
			deferred.resolve(responseData);
		});
	});

	req.on('error', function(err) {
		deferred.reject(err);
	});
	req.end();
	return deferred.promise;
};

promisedRequest(googleNewsOptions)
.then(function(newsResponse) { //callback invoked on deferred.resolve
	console.log(newsResponse);
}, function(newsError) { //callback invoked on deferred.reject
	console.log("error:" + newsError);
});


