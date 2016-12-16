var helloWorldA = require('./hello_world');
var helloWorldB = require('./hello_world');
// Change the value of 'greeting' from "Hello, World" to "Hi"
//
helloWorldA.greeting = 'hi';
// Outputs "Hi" twice
console.log(helloWorldA.greeting);
console.log(helloWorldB.greeting);
