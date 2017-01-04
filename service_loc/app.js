
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var http = require('http');
var authController = require('./lib/authController');

var app = module.exports = express();
var svcLoc = require('./lib/serviceLocator')();     //[1]

svcLoc.register('dbName', 'example-db');       //[2]
svcLoc.register('tokenSecret', 'SHHH!');
svcLoc.factory('db', require('./lib/db'));
svcLoc.factory('authService', require('./lib/authService'));
svcLoc.factory('authController', require('./lib/authController'));
svcLoc.register('app', app);

var authController = svcLoc.get('authController');   //[3]
//svcLoc.list();

app.use(bodyParser.json());
app.post('/login', authController.login);
app.get('/checkToken', authController.checkToken);
app.use(errorHandler());

var plugin = require('authsrv-plugin-logout');
plugin(svcLoc);

http.createServer(app).listen(3000, function () {
		console.log('Express server started');
});
