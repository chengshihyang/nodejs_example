var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './all-logs.log', maxsize:1024, maxFiles:3 })
  ],
  //exceptionHandlers: [
  //  new winston.transports.File({ filename: './exceptions.log', maxsize:1024, maxFiles:3 })
  //]
});


setInterval(function() {
		logger.warn('test');
}, 100);
