'use strict';
import fs from 'fs';
fs.writeFileSync('output.txt', 'Hello World');
const data = fs.readFileSync('output.txt');
console.log(data.toString());