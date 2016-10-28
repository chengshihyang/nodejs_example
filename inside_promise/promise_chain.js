fs=require('fs')

var Deferred = function() {
	this.promise = new Promise();
}

//完成態
Deferred.prototype.resolve = function (obj) {
	console.log("Deferred.prototype.resolve");
	var promise = this.promise;
	var handler;
	while ((handler = promise.queue.shift())) {
		if (handler && handler.fulfilled) { 
			var ret = handler.fulfilled(obj);
			if (ret && ret.isPromise) {
				ret.queue = promise.queue;
				this.promise = ret; 
				return;
			}
		} 
	}
};


//失敗態
Deferred.prototype.reject = function (err) {
	console.log("Deferred.prototype.reject");
	var promise = this.promise;
	var handler;
	while ((handler = promise.queue.shift())) {
		if (handler && handler.error) {
			var ret = handler.error(err);
			if (ret && ret.isPromise) {
				ret.queue = promise.queue;
				this.promise = ret;
				return;
			}
		} 
	}
};


//生成回調函數
Deferred.prototype.callback = function () {
	console.log("Deferred.prototype.callback");
	var that = this;
	return function (err, file) {
		if (err) {
			console.log("Deferred.prototype.callback reject");
			return that.reject(err);
		}
		console.log("Deferred.prototype.callback resolve ");
		that.resolve(file);
	};
};

var Promise =  function() {
	this.queue = [];
	this.isPromise = true;
};


Promise.prototype.then = function (fulfilledHandler, errorHandler, progressHandler) { 
	console.log("Promise.prototype.then");
	var handler = {};
	if (typeof fulfilledHandler === 'function') {
		handler.fulfilled = fulfilledHandler; 
	}
	if (typeof errorHandler === 'function') { 
		console.log("error");
		handler.error = errorHandler;
	} 
	this.queue.push(handler); 
	return this;
};

var readFile1 = function (file, encoding) {
	console.log("readFile1");
	var deferred = new Deferred();
	fs.readFile(file, encoding, deferred.callback());
	return deferred.promise;
};

var readFile2 = function (file, encoding) {
	console.log("readFile2")
	var deferred = new Deferred();
	fs.readFile(file, encoding, deferred.callback());
	return deferred.promise;
};

readFile1('file1.txt', 'utf8').then(function (file1) {
	console.log("readFile1 then");
	return readFile2(file1.trim(), 'utf8');
}).then(function (file2) {
	console.log("readFile2 then");
	console.log(file2);
});
