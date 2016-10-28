var async = require("async");

function HelloWorldOne(callback){
  setTimeout(function(){
    console.log("HelloWorld - One");
    callback(null, '{"test":123}');
  }, 0);
}

function HelloWorldTwo(callback){
  setTimeout(function(){
    console.log("HelloWorld - Two:");
    callback(null, 2);
  }, 0);
}

function HelloWorldThree(callback) {
 setTimeout(function(){
    console.log("HelloWorld - Three:");
    callback(null, 3);
  }, 0);
}

async.series([HelloWorldOne, HelloWorldTwo, HelloWorldThree], function(err, result){
    console.log("Executed all calls in series." + result); //result is 1, 2, 3
})
