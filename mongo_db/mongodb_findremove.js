var deleteDocuments = function(db, callback) {
	// Get the documents collection
	var collection = db.collection('documents');

        collection.findAndRemove({a:1}, function(err, doc) {
		if (doc) {
			console.log(doc);
		}
		callback();
        });

}


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  deleteDocuments(db, function() {
    db.close();
  });
});
