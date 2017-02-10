var util = require('util');
var q = require('q');

function run(param, callback) {
  var LIMIT = 2;
  var queue = [];
  var result = [];
  var count=0;
	var running=0;
	var errObj;

  function doRequest(obj) {
		if (errObj !== undefined) {
      checkStatus(length);
			return;
		}
    var item = queue.shift();
    if (item != undefined) {
			running++;
      (function(func, length) {
        function checkStatus(length) {
          count++;
					running--;
          if (length === count) {
            callback(errObj, result);
          } else if (errObj === undefined) {
            process.nextTick(doRequest, obj);
          } else if (running===0) {
            console.log('error and running is 0', errObj);

            callback(errObj, result);
					}
        }

        func().then( function(data) {
          console.log('success:', data);
          result.push(data);
          checkStatus(obj.length);
        }).fail( function(error) {
          console.log('falure:', error);
          errObj=new Error(error);
          checkStatus(obj.length);
        });
      })(obj[item], obj.length);
    }
  }

  for (var j = 0; j < param.length; j++) {
    queue.push(j);
  }
  for (i = 0; i < LIMIT; i++) {
    process.nextTick(doRequest, param);
  }
}


module.exports = {
  run: run,
};
