'use strict';
var fs = require('fs');
fs.writeFileSync('file.txt', 'Hello World');
console.log(fs.readFileSync('file.txt'));