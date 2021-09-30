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
// 1. Stream zum Einlesen der zu komprimierenden Datei
const inputStream = fs.createReadStream(INPUT);

// 2. Stream für das Komprimieren der eingelesenen Daten
const gzipStream = zlib.createGzip();
// 3. Stream für das Schreiben der Archivdatei
const outputStream = fs.createWriteStream(OUTPUT);
inputStream // Einlesen der Datei
  .pipe(gzipStream) // Komprimieren der eingelesenen Daten
  .pipe(outputStream); // Schreiben der Archivdatei