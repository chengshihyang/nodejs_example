var from = require('from2-array')
var through = require('through2')

from.obj([{
  name:'a'
},{
  name:'b'
},{
  name:'c'
}]).pipe(through.obj(
		function(chunk, enc, cb){
				console.log('found: ' + chunk.name);
				cb(null, 'wap!!');
		})
)
 
