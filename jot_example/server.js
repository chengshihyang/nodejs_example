var someRandomPort = 8077;
var jot = require('json-over-tcp');
 
var server = jot.createServer({port:someRandomPort});

server.on('connection', newConnectionHandler);
 
// Triggered whenever something connects to the server 
function newConnectionHandler(socket){
  // Whenever a connection sends us an object... 
  socket.on('data', function(data){
    // Output the question property of the client's message to the console 
    console.log("Client's question: " + data.question);
 
    // Wait one second, then write an answer to the client's socket 
    setTimeout(function(){
      socket.write({answer: 42});
    }, 1000);
  });
};


server.listen(someRandomPort);

setInterval(function() {
		console.log(server.connections);
}, 1000);
