var Q = require('q');

function createPromise(number){
    if(number ===3 )
        return Q(1).then(function(){
                    throw new Error("haha, error!");
                })
    return Q(number*number);
}

var array = [1,2,3,4,5];

var promiseArray = array.map(function(number){
    return createPromise(number);
});

Q.all(promiseArray).then(function(results){
    console.log(results);
},function (err) {
    console.log(err);
});
/** 运行结果
 * [Error: haha, error!]
 * */
