
// Create singletons
var helloWorldA = require('./hello_world')();
var helloWorldB = require('./hello_world')();

// Create new instances of the object
var helloWorldC = new (require('./hello_world')); //require('./hello_world') is function
var helloWorldD = new (require('./hello_world'));

// Create singletons
var helloWorldE = require('./hello_world'); //require('./hello_world') is function
var helloWorldF = require('./hello_world');

console.log(helloWorldA); //module object
console.log(helloWorldB); //module object

console.log(helloWorldC); //HelloWorld { greeting: 'Hello again' }
console.log(helloWorldD); //HelloWorld { greeting: 'Hello again' }

console.log(helloWorldE); //[Function: HelloWorld]
console.log(helloWorldF); //[Function: HelloWorld]

// Change the greeting property in helloWorldA and helloWorldB
helloWorldA.greeting = 'Hi';

// Change the greeting property in the helloWorldC only
helloWorldC.greeting = 'Hello again';

// Change the greeting property in the helloWorldE
helloWorldE.greeting = 'Hello again again';

console.log(helloWorldA.greeting);
console.log(helloWorldB.greeting);
console.log(helloWorldC.greeting);
console.log(helloWorldD.greeting);
console.log(helloWorldE.greeting);
console.log(helloWorldF.greeting);
console.log(helloWorldE().greeting);
console.log(helloWorldF().greeting);
