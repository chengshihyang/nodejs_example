
var Q=require('q');
var FS=require('fs');

function promise_read(filename) {
  var deferred = Q.defer();
  FS.readFile(filename, "utf-8", function (error, text) {
      if (error) {
          deferred.reject(new Error(error));
      } else {
          deferred.resolve(text);
      }
  });
  return deferred.promise;
}

promise_read('log.txt').then(function(data) {
  console.log(data);
}, function(err) {
  console.log(err);
});
