var Q = require('q');

var outputPromise = Q(1).then(function(data){
   console.log(data);
   return Q('test');
});

outputPromise.then(function(data){
    console.log("FULFILLED : "+data);
},function(err){
    console.log("REJECTED : "+err);
})

/** 运行结果
 * 1
 * FULFILLED : 3
 * */
