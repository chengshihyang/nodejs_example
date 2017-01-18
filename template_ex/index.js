var moment = require('moment-timezone');

var ts=moment().tz("America/Los_Angeles").format();
console.log(ts)
//var c = moment.tz(1403454068850, "America/Toronto");
//var c = moment.tz('2017-01-12T09:57:17.000Z', "America/Toronto");
var c = moment.tz('2017-01-12T09:57:17.000Z', "Asia/Taipei");
console.log(c.format() )
