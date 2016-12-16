
var date1=new Date();
module.exports = {
		createdb : function() {
			var date2 = new Date();
			var fs= {};
			fs.readFile = function (name) {
					console.log("fs readFile date 1:" + date1);
					console.log("fs readFile date 2:" + date2);
			};
			fs.writeFile = function (name) {
					console.log("fs writeFile date 1" + date1);
					console.log("fs writeFile date 2" + date2);
			};
			return fs;
	  }
}
