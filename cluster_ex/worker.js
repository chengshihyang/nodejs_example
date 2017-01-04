var http=require('http');
var date=new Date().getTime();
var log4js= require('log4js');
var logFile='./logs/worker.' + process.pid + "." + date;

log4js.configure({
		  appenders: [
		    { 
						type: 'file',
						filename: logFile,
						category: 'worker',
						maxLogSize: 20480,
					  backups: 3,
				}
		  ]
});
var	logger = log4js.getLogger('worker');

module.exports.run = function run() {
	http.createServer(function(req, res) {
			res.writeHead(200);
			res.end(`worker process pid ${process.pid}\n`);
			throw new Error('throw exception');
	}).listen(8000);
}

//message from master
process.on('message', function(msg) {
		logger.info('message:' + JSON.stringify(msg));
});

setInterval( function() {
		process.send({ cmd: 'notifyRequest', message: process.pid });
}, 5000);

process.on('uncaughtException', function (err) {
		process.disconnect();
		logger.fatal('uncaughtException:\n' + err);
		process.send({act: 'suicide'});
		process.exit(1);
});
