var fs = require('fs');
var async = require('async');
var http = require('http');
var path = './headers.txt';

async.waterfall(
    [
        // i. check if headers.txt exists
        function(callback) {
            fs.stat(path, function(err, stats) {
                if (stats == undefined) {
                  callback(null, "kkk", "ppp");
                }
                else {
                  console.log('headers already collected');
                }
            });
        },

        // ii. fetch the HTTP headers
        function(data, data2, callback) {
          console.log(data);
          console.log(data2);
            var options = {
                host: 'www.wikipedia.org',
                port: 80
            };
            http.get(options, function(res) {
                var headers = JSON.stringify(res.headers);
                callback(null, headers);
            });
        },

        // iii. write the headers to headers.txt
        function(headers, callback) {
            fs.writeFile(path, headers, function(err) {
                console.log('Great Success!');
                callback(null, ':D');
            });
        }
    ],

    // the bonus final callback function
    function(err, status) {
        console.log(status);
    }
);
