var Q = require('q');

Q(1)
.then(function(data) {
   console.log(data);
   return 2; // outputPromise将会fulfilled
  })
.then(function(data){
    console.log("FULFILLED : "+data);
  },function(err){
    console.log("REJECTED : "+err);
  })
/** 运行结果
 * 1
 * FULFILLED : 2
 * */
