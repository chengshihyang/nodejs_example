
var async=require('async');
var users = "";

// Pretend this is some complicated async factory
var createUser = function(id, next) {
	console.log(id);
        next(null, id);
};

// generate 5 users
async.timesSeries(5, function(n, next) {
    users = users + "n";
    setTimeout(createUser, 1000, n, next);
}, function(err, users) {
    // we should now have 5 users
	console.log(users);
});
