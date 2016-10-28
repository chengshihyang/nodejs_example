var express = require('express');
var app = express();


//middleware function is called in use sequence

app.use(function (req, res, next) {
  console.log('Time 1:', Date.now());
});


app.use(function (req, res, next) {
  console.log('Time 2:', Date.now());
  next();
});

//respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});


app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res, next) {
  console.log('the response will be sent by the next function 2...');
  //res.send('Hello from B!');
  next();
}, function (req, res, next) {
  res.send('Hello from BB!');
  next();
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
