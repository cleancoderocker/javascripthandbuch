'use strict';
var fs = require('fs');
fs.writeFileSync('datei.txt', 'Hallo Welt');
console.log(fs.readFileSync('datei.txt'));