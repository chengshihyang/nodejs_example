var insertDocuments = function(db, data, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  console.log(data);
  collection.insertMany([
    {a : data}
  ], function(err, result) {
    console.log("Inserted 1 documents into the collection");
    callback(result);
  });
}


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var count=0;


function test() {
  count ++;
  // Connection URL
  var url = 'mongodb://localhost:27017/test';
  //var url = 'mongodb://localhost:27017';
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    console.log("Connected successfully to server");
  
    insertDocuments(db, count, function() {
	    console.log('close');
      db.close();
    });
  });
}

setInterval( test, 1000);
