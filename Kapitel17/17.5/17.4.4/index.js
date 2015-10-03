var fs = require('fs');
fs.writeFileSync('output.txt', 'Hallo Welt');
var data = fs.readFileSync('output.txt');
console.log(data.toString());