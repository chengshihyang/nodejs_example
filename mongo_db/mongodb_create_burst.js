var insertDocuments = function(db, data, callback) {
  // Get the documents collection
  var collection = db.collection('documents');

  if (collection) {
    // Insert some documents
    collection.insertMany([
      {a : data}
    ], function(err, result) {

      callback(result);
    });
  }
  else {
	  console.log("unable to get collection");
  }
}


var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var count=0;
// Connection URL
var url = 'mongodb://localhost:27017/test';


function test() {
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
	  if (db) {
   		count ++;
    		insertDocuments(db, count, function() {
//    		  db.close();
    		});
	  }
	  if (err) {
		  console.log("connect error:", err);
	  }
  });
}


function onetime() {
	for (var i=0; i<400; i++) {
		test();
	}
}

setInterval( onetime, 1000);
