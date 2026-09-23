'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { pipeline } = require('stream');
 
const INPUT = path.join(__dirname, '..', 'data', 'input', 'someFile.txt');
const OUTPUT = path.join(__dirname, '..', 'data', 'someFile.txt.gz');
 
const inputStream = fs.createReadStream(INPUT);
const outputStream = fs.createWriteStream(OUTPUT);
const gzipStream = zlib.createGzip();
 
pipeline(
  inputStream, 
  gzipStream, 
  outputStream, 
  (error) => {
    if (error) {
      console.error('Compression failed.');
    } else {
      console.log('Compression successful.');
    }
    // Perform cleanup ...
    // ... for example, close streams, etc.
  }
);
