var jot = require('json-over-tcp');
var someRandomPort= 8077;



// Creates one connection to the server when the server starts listening 
function createConnection(){
  // Start a connection to the server 
  var socket = jot.connect(someRandomPort, function(){
    // Send the initial message once connected 
    socket.write({question: "Hello, world?"});
  });
  
	socket.on('error', function(err) {
			console.log('createConnection:\n' + err);
	});
  // Whenever the server sends us an object... 
  socket.on('data', function(data){
    // Output the answer property of the server's message to the console 
    console.log("Server's answer: " + data.answer);
    
    // Wait one second, then write a question to the socket 
    setTimeout(function(){
      // Notice that we "write" a JSON object to the socket 
      socket.write({question: "Hello, world?"});
    }, 1000);
  });
}


createConnection();
