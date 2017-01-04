var Q=require('q');
var fs=require('fs');

function fs_readFile (file, encoding, callback) {  
  var deferred = Q.defer();
  fs.readFile(file, encoding, function (err, data) {
    if (err) deferred.reject(err) // rejects the promise with `er` as the reason
    else deferred.resolve(data) // fulfills the promise with `data` as the value
  })
  return deferred.promise.nodeify(callback) // the promise is returned
}

function fs_readFile1 (file, encoding, callback) {  
  var deferred = Q.defer();
  fs.readFile(file, encoding, function (err, data) {
    deferred.reject(data);
  })
  return deferred.promise.nodeify(callback) // the promise is returned
}



//var allPromise = Q.all([fs_readFile('./file1.txt', 'utf-8'), fs_readFile1('./file2.txt', 'utf-8')]);
//var allSettledPromise = Q.allSettled([fs_readFile('./file1.txt', 'utf-8'), fs_readFile1('./file2.txt', 'utf-8')]);
//
//allPromise.then(function (success) {
//		console.log(success);
//}, function (failure) {
//		console.log(failure);
//});
//
//
//allPromise.spread( function(data1, data2) {
//		console.log('spread ' + JSON.stringify(data1));
//		console.log('spread ' + JSON.stringify(data2));
//});
//
//allSettledPromise.spread( function(data1, data2) {
//		console.log('spread ' + JSON.stringify(data1));
//		console.log('spread ' + JSON.stringify(data2));
//});

var funcs = [fs_readFile('./file1.txt', 'utf-8'), fs_readFile('./file2.txt', 'utf-8')];
var result = Q('begin');//定义一个初始值begin  
funcs.forEach(function(f) {  
  result = result.then(f);//遍历传参  
});  

//function eventualAdd(a, b) {
//		return Q.spread([a, b], function (a, b) {
//				return a + b;
//		})
//}
//
//Q.all([
//		    eventualAdd(2, 2),
//		    eventualAdd(10, 20)
//]).spread ( function (data1, data2) {
//		console.log(data1);
//		console.log(data2);
//});


Q.spread([10, 11], function (a, b) {
		return a+b;
}).then( function(success) {
		console.log(success);
});


Q.when( fs_readFile('./file1.txt', 'utf-8'), function (value) {
		console.log(value);
});
