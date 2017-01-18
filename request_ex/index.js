const request=require('request');
const util=require('util');
const LIMIT=2;
var queue=[];
var sql_cnt=0;
var LENGTH=10;

for (var i=0; i<LENGTH; i++) {
		queue.push(i*3+1);
}

function foo(data) {
		var item=queue.shift();
		if (item !== undefined) {
		  (function(index) {
		    request('http://www.google.com', function (error, response, body) {
						sql_cnt++;
						console.log('sql count:' + sql_cnt);
		    		if (error) {
		    				console.log(error);
		    		}
		    		else {
		  					console.log('response: ' + index);
		            console.log(response.statusCode) // Show the HTML for the Google homepage. 
		    		}
						if (sql_cnt < LENGTH ) {
		  			  process.nextTick(foo);
						}
		    })
		  })(item);
		}
}

for (var j=0; j<LIMIT; j++) {
		process.nextTick(foo);
}

