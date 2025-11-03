'use strict';
import fs from 'fs';
fs.writeFileSync('output.txt', 'Hallo Welt');
const data = fs.readFileSync('output.txt');
console.log(data.toString());