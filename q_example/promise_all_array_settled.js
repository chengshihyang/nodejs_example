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


Q.allSettled(promiseArray)
    .then(function (results) {
        results.forEach(function (result) {
            if (result.state === "fulfilled") {
                console.log(result.value);
            } else {
                console.error(result.reason);
            }
        });
    });
/** 运行结果
1
4
[Error: haha, error!]
16
25
*/
