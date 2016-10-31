var queryDocuments = function(db, callback) {
	// Get the documents collection
	var collection = db.collection('documents');
	// Insert some documents
	collection.find({a:1}).toArray(function (err, results) {
		if (results) {
			console.log(results);
		}
		callback();
	});
}


var dbConnect = null;
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  dbConnect = db;
  console.log("Connected successfully to server");

  dbConnect.on('close', function() {
	  console.log("connect closed");
	  dbConnect = null;
  });

  //queryDocuments(db, function() {
  //  db.close();
  //});
});


var queryDocuments2 = function() {

	// Get the documents collection
	if (dbConnect) {
   	  console.log("dbConnect is not null");
	  var collection = dbConnect.collection('documents');
	  // Insert some documents
	  collection.find({a:1}).toArray(function (err, results) {
	  	if (results) {
	  		console.log(results);
	  	}
	  });
	}
	else {
		console.log("dbConnect is null");
	}
}


setInterval(queryDocuments2, 1000);
