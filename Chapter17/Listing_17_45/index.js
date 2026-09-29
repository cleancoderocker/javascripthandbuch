'use strict';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT = path.join(__dirname, '..', 'data', 'someFile.txt.gz');
const OUTPUT = path.join(__dirname, '..', 'data', 'output');
const OUTPUT_FILE = path.join(OUTPUT, 'someFile.txt');
 
fs.emptyDirSync(OUTPUT);
 
// 1. Stream for reading the file to be decompressed
const inputStream = fs.createReadStream(INPUT);
 
// 2. Stream for decompressing the read data
const gunzipStream = zlib.createGunzip();
 
// 3. Stream for writing the archive file
const outputStream = fs.createWriteStream(OUTPUT_FILE);
 
inputStream             // Read the file
  .pipe(gunzipStream)   // Decompress the read data
  .pipe(outputStream);  // Write the archive file
