var q = require('q');
var request = require('request');
var authreport=require('../index.js');
var result=[];


function makeRequest(url) {
  function makePromise() {
    var deferred = q.defer();
      request(url, function(error, response, body) {
      if (!error) {
        console.log(response.headers['content-type']);
        deferred.resolve(url);
      }   
      else {
        deferred.reject(url);
      }
    }); 
    return deferred.promise;
  }
  return makePromise;
}

function test(error, data) {
  console.log(error);
  console.log(data);
}

var url= [
  "https://www.google.com",
  "https://www.facebook.commm",
  "http://www.iiot.com",
  "https://tw.yahoo.com"
];

var funcs=[];

for (var i=0; i<url.length; i++) {
  funcs.push(makeRequest(url[i]));
}

authreport.run(funcs, test);
