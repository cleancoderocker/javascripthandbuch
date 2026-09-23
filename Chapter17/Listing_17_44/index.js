'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
 
const INPUT = path.join(
  __dirname, 
  '..', 
  'data', 
  'input', 
  'someFile.txt'
);
const OUTPUT = path.join(
  __dirname, 
  '..', 
  'data', 
  'someFile.txt.gz'
);
 
// 1. Stream for reading the file to be compressed
const inputStream = fs.createReadStream(INPUT);
 
// 2. Stream for compressing the read data
const gzipStream = zlib.createGzip();
 
// 3. Stream for writing the archive file
const outputStream = fs.createWriteStream(OUTPUT);
 
inputStream             // Read the file
  .pipe(gzipStream)     // Compress the read file
  .pipe(outputStream);  // Write the archive file
