
var authService = require('./authService');

exports.login = function (req, res, next) {
		authService.login(req.body.username, req.body.password, function(err, result) {
				if (err) {
						res.status(500).send({ok: false});
						return;
				}
				res.status(200).send({ok: true});
		} );
 };

exports.checkToken = function (req, res, next) {
		console.log(req.query.token);
    authService.checkToken(req.query.token, function(err, result) {
				if (err) {
						res.status(500).send({ok: false});
						return;
				}
				console.log("authService checkToken: " + result);
				res.status(200).send({ok: true});
		} );
};
