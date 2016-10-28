var Q = require('q');

function createPromise(number){
    return Q(number*number);
}

var array = [1,2,3,4,5];

var promiseArray = array.map(function(number){
    return createPromise(number);
});

Q.all(promiseArray).then(function(results){
    console.log(results);
});
