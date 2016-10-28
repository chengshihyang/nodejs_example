//'use strict'

var o = {
	m: function() {
		var self = this;
		console.log(this==o); // true
		f();
		      

		function f() {
			console.log(this === o); // false，this的值是全局对象或undefined
			console.log(self === o); // true
		}
	},

}

//o.m();

var animals = [
	  {species: 'Lion', name: 'King'},
	  {species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
	(function (i) { 
		this.print = function () { 
			console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
		} 
		this.print();
	}).call(animals[i], i);
}



