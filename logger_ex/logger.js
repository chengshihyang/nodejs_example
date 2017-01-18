var log4js=require ('log4js');
var workers=[];
var logger;
var logFile='./logs/test.' + process.pid;

log4js.configure({
		appenders: [
				{
					type: 'file',
					filename: logFile,
					category: 'test',
					maxLogSize: 4096000,                                                                                  
					backups: 3,                                                                                                                
				}                                                                                                                                           
    ]                                                                                                                                                 
});                                                                                                                                                         
logger = log4js.getLogger('test');                                                                                                                        

setInterval( () => {
		logger.debug('test');
}, 1000);
