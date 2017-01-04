var objectPath = require("object-path");
var obj = {
		  a: {
					    b: "d",
					    c: ["e", "f"],
					    '\u1200': 'unicode key',
					    'dot.dot': 'key'
					  }
};

objectPath.push(obj, 'a.f.e', 'k2');
objectPath.push(obj, 'a.f.e', 'k3');
console.log(objectPath.get(obj, 'a.f.e'));
//console.log(objectPath.coalesce(obj, ['a.z', 'a.d', ['a','b']], 'default'));

