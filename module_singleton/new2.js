var helloWorldA = require('./hello_world2');
var helloWorldB = require('./hello_world2');

console.log(helloWorldA);
// Change the value of 'greeting' from "Hello, World" to "Hi"
helloWorldA.greeting = "Hi";

// Outputs "Hi" twice
console.log(helloWorldA.greeting);
console.log(helloWorldB.greeting);
