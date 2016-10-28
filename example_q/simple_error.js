var Q = require('q');

Q(1)
.then(function(data) {
   console.log(data);
   throw new Error("haha ,error!");
   return 2;
})
.then(function(data){
  console.log("FULFILLED : "+data);
},function(err){
  console.log("REJECTED : "+err);
})
/** 运行结果
 * 1
 * REJECTED : Error: haha ,error!
 * */
