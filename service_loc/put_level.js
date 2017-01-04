var levelup = require('levelup');
var sublevel = require('level-sublevel');
 
var db = sublevel(levelup('example-db'));
var sub_users = db.sublevel('users');
var sub_token = db.sublevel('token');
 
//sub_users.put("alice", "secret", function (err, data) {})
//sub_token.put("alice", "123456", function (err, data) {})

sub_users.get('alice', function(err, value) {  
		  console.log('secret value:', value);
});

sub_token.get('9858', function(err, value) {  
		  console.log('token value:', value);
});
