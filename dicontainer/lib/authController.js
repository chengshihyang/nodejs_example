
module.exports = function(authService) {
		var authController = {};

		authController.login = function (req, res, next) {
				console.log('authController.login');
				authService.login();
		};
		authController.checkToken = function (req, res, next) {
				console.log('authController.checkToken');
				authService.checkToken();
	  };
		return authController;
}
