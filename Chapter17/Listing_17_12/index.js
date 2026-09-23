'use strict';
const fs = require('fs');
fs.writeFileSync('output.txt', 'Hello World');
const data = fs.readFileSync('output.txt');
console.log(data.toString());