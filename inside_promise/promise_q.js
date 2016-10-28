var util= require('util');
var events = require('events');
var EventEmitter = events.EventEmitter;
var res=new EventEmitter();
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


//example
var promisify = function (res) {
	var deferred = new Deferred();
	var result= '';
	res.on('data', function (chunk) {
		console.log("promisify on data");
		result += chunk;
		deferred.progress(chunk);
	});
	res.on('end', function () {
		console.log("promisify on end");
		deferred.resolve(result);
	});
	res.on('error', function (err) {
		console.log("promisify on err");
		deferred.reject(err);
	});
	return deferred.promise;
}


promisify(res).then(function () {
	//Done
	console.log("final resolve");
}, function (err) {
	console.log("final error");
	//Error
}, function (chunk) {
	console.log("body: " + chunk);
});



//example 1.
//res.emit("data", "this is data");
