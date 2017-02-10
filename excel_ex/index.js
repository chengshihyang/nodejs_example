var XLSX = require('xlsx');

workbook=XLSX.readFile("Workbook1.xlsx", {type: 'base64'});

var sheetNames = workbook.SheetNames;

console.log(sheetNames);
var worksheet = workbook.Sheets[sheetNames[0]];

console.log(JSON.stringify(worksheet));
var a1 = worksheet['A1']; // 返回 { v: 'hello', t: 's', ... }
