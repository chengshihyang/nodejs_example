var level=require('level');
var sublevel=require('level-sublevel');

module.exports = sublevel(
		//level('example-db', {valueEncoding: 'json'})
		level('example-db')
);
