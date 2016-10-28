var fs=require('fs');
var util= require('util');
var events = require('events');
var EventEmitter = events.EventEmitter;
var Q=require('q')

var Promise = function() {
        EventEmitter.call(this);
};

util.inherits(Promise, EventEmitter)

Promise.prototype.then = function (fulfilledHandler, errorHandler, progressHandler) {
        if (typeof fulfilledHandler == 'function') {
                console.log("promise fulfilled");
                this.once('success', fulfilledHandler);
        }
        if (typeof errorHandler == 'function') {
                console.log("promise error");
                this.once('error', errorHandler);
        }
        if (typeof progressHandler == 'function') {
                console.log("promise progress");
                this.on('progress', progressHandler);
        }
        return this;
}


var Deferred = function () {
        this.state='unfulfilled';
        this.promise=new Promise();
}

Deferred.prototype.resolve = function (obj) {
        console.log("Deferred resolve");
        this.state = 'fulfilled';
        this.promise.emit('success', obj);
}

Deferred.prototype.reject = function (err) {
        console.log("Deferred reject");
        this.state = 'failed';
        this.promise.emit('error', err);
}

Deferred.prototype.progress = function (data) {
        console.log("Deferred progress");
        this.promise.emit('progress', data);
}

Deferred.prototype.all = function (promises) {
        var count = promises.length;
        var that = this;
        var results = [];
	promises.forEach(function (promise, index) {
		promise.then(function (data) {
			count--;
			results[index] = data;
			if (count === 0) {
				that.resolve(results);
			}
		}, function (err) {
			that.reject(err);
		});
	});
	return this.promise;
}

var readFile=function (file, encoding) {
	var deferred=Q.defer();
	fs.readFile(file, encoding, deferred.makeNodeResolver());
	return deferred.promise;
};


//Example 1
/*
readFile("foo.txt", "utf-8").then(function (data) {
	//success case
	console.log("success: " + data);
}, function (err) {
	//failed case
	console.log("failed: " + err);
});
*/


//Example 2
var promise1 = readFile("foo.txt", "utf-8");
var promise2 = readFile("bar.txt", "utf-8");

var deferred= new Deferred();

deferred.all([promise1, promise2]).then( function (results) {
	console.log("deferred all: " + results);
}, function (err) {
	console.log("deferred failed: " + results);
});
