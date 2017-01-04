module.exports = function(db) {
  console.log("db: " + JSON.stringify(db));
	var users = db.sublevel('users');
	var authService = {};

	authService.login = function(username, password, callback) {
		//console.log(" " + JSON.stringify(users));
  	console.log('authService login');
	};
  authService.checkToken = function(token, callback) {
  	console.log('authService checkToken');
	}
  return authService;
};

