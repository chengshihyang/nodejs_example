var async=require('async');
var sampleArray = [["name1", "age1"], ["name2", "age2"],["name3", "age3"]];

async.mapSeries(sampleArray, function(data,callback){
    return callback(null, data[0]);
}, function(err, results) {
    console.log('results : ' + results);  // results : name1,name2,name3  
});
//sample code //["name1","name2","name3"] executes here

async.mapSeries(sampleArray, function(data,callback){
    return callback(null, data[1]);
}, function(err, results) {
    console.log('results : ' + results); // results : age1,age2,age3
});

//sample code //["age1","age2","age3"] executes here
