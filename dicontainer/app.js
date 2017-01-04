
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var http = require('http');
var authController = require('./lib/authController');
var app = module.exports = express();
var diContainer = require('./lib/diContainer')();

console.log(diContainer);

diContainer.register('dbName', 'example-db');
diContainer.register('tokenSecret', 'SHHH!');
diContainer.factory('db', require('./lib/db'));
diContainer.factory('authService', require('./lib/authService'));
diContainer.factory('authController', require('./lib/authController'));
diContainer.register('app', app);

diContainer.inject(require('authsrv-plugin-logout'));

var authController = diContainer.get('authController');
app.post('/login', authController.login);
app.get('/checkToken', authController.checkToken);
app.use(errorHandler());                                                                                                                                      

                                                                                                                                                              
http.createServer(app).listen(3000, function () {                                                                                                             
		console.log('Express server started');                                                                                                                    
});  
