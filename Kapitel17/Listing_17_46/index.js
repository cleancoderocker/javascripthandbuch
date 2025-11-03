'use strict';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
      console.error('Komprimierung fehlgeschlagen.');
    } else {
      console.log('Komprimierung erfolgreich.');
    }
    // Aufräumarbeiten durchführen …
    // … beispielsweise Streams schließen etc.
  }
);