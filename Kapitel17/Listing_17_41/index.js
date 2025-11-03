'use strict';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
const INPUT = path.join(__dirname, '..', 'large.file');
 
const readableStream = fs.createReadStream(INPUT);
 
readableStream.on('data', (data) => {
  console.log(data.toString('utf-8'));
});
 
readableStream.on('end', () => {
  console.log('File reading completed');
});
