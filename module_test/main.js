//require will return same value in leveldb.js global variable
var leveldb1= require('./leveldb.js')
var leveldb2= require('./leveldb.js')
var mymod= require('./mymod.js');
var db= require('./db.js');


console.log(db);
for (var i=0; i<10000000000; i++) {var j=i};
var db2= require('./db.js');

console.log(db2);


var temp=mymod()();


console.log(temp);

