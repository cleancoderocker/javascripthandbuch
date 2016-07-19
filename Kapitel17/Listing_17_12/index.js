'use strict';
const fs = require('fs');
fs.writeFileSync('output.txt', 'Hallo Welt');
let data = fs.readFileSync('output.txt');
console.log(data.toString());