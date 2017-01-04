const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
var process = require('process'); 
var date=new Date().getTime();
var log4js=require ('log4js');
var workers=[];
var logger;

function configureLogfile(category) {
	var logFile='./logs/' + category + '.' + process.pid + "." + date;                                                                                                      
	log4js.configure({                                                                                                                                            
			      appenders: [                                                                                                                                            
								{                                                                                                                                                     
											type: 'file',                                                                                                                                     
						          filename: logFile,                                                                                                                                
						          category: category,                                                                                                                               
						          maxLogSize: 20480,                                                                                                                                
						          backups: 3,                                                                                                                                       
								}
						]                                                                                                                                                       
	});
	logger = log4js.getLogger(category);
}

function createWorker() {
		var worker=cluster.fork();
    worker.on('message', messageHandler);
		workers[worker.process.pid]=worker;
}


if (cluster.isMaster) {
	configureLogfile('master');

  cluster.on('exit', (worker, code, signal) => {
			logger.info(`worker ${worker.process.pid} died`);
			delete workers[worker.process.pid];
			createWorker();
  });

  cluster.on('fork', (worker) => {
	});

	//For workers
  for (var i = 0; i < numCPUs; i++) {
			createWorker();
	}

} else {
	var worker = require('./worker.js');
	worker.run();
}

function messageHandler(msg) {
		if (msg.cmd && msg.cmd == 'notifyRequest') {
				logger.info(JSON.stringify(msg));
		}
}

setInterval( function() {
	workers.forEach(function(worker){
		if (worker !== undefined) {
      worker.send({msgFromMaster: 'This is from master ' + process.pid + ' to worker ' + worker.process.pid + '.'});
		}
	});
}, 5000);


process.on('exit', (code) => {
		for (var pid in workers) {
				workers[pid].kill();
		}

});
