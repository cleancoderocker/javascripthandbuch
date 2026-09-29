'use strict';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
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
