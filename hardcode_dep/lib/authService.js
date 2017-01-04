var db = require('./db');
var users = db.sublevel('users');
var token_table = db.sublevel('token');
var tokenSecret = 'SHHH!';

exports.login = function(username, password, callback) {
		users.get(username, function(err, user) {
				if (user !== undefined) {
				  var token=Math.floor(Math.random() * 10000) + 1;
				  token_table.put(token, username, function() {
							callback(null, { token:token, username:username });
					});

				}
		});
};

exports.checkToken = function(token, callback) {
	 console.log(token);
 	 token_table.get(token, function(err, user) {
 			 console.log("checkToken: " + user);
 	 });
};

