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
 
// 1. Stream zum Einlesen der zu komprimierenden Datei
const inputStream = fs.createReadStream(INPUT);
 
// 2. Stream für das Komprimieren der eingelesenen Daten
const gzipStream = zlib.createGzip();
 
// 3. Stream für das Schreiben der Archivdatei
const outputStream = fs.createWriteStream(OUTPUT);
 
inputStream             // Einlesen der Datei
  .pipe(gzipStream)     // Komprimieren der eingelesenen Daten
  .pipe(outputStream);  // Schreiben der Archivdatei
