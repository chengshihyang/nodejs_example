module.exports = function(serviceLocator) {
	var db = serviceLocator.get('db');
	var tokenSecret = serviceLocator.get('tokenSecret');
	var users = db.sublevel('users');
	var authService = {};

	authService.login = function(username, password, callback) {
  	console.log('authService login');
	};
  authService.checkToken = function(token, callback) {
  	console.log('authService checkToken');
	}
  return authService;
};

