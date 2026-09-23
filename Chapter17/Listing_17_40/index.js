'use strict';
const fs = require('fs');
const path = require('path');
const INPUT = path.join(__dirname, '..', 'large.file');
const readableStream = fs.createReadStream(INPUT, {
  encoding: 'utf-8'
});
readableStream.on('readable', () => {
  const data = readableStream.read();
  console.log(data);
});
readableStream.on('end', () => {
  console.log('File reading completed');
});