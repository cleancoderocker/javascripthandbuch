'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const INPUT = path.join(__dirname, '..', 'data', 'someFile.txt.gz');
const OUTPUT = path.join(__dirname, '..', 'data', 'output');
const OUTPUT_FILE = path.join(OUTPUT, 'someFile.txt');
fs.emptyDirSync(OUTPUT);
// 1. Stream zum Einlesen der zu dekomprimierenden Datei
const inputStream = fs.createReadStream(INPUT);
// 2. Stream für das Dekomprimieren der eingelesenen Daten
const gunzipStream = zlib.createGunzip();
// 3. Stream für das Schreiben der Archivdatei
const outputStream = fs.createWriteStream(OUTPUT_FILE);
inputStream // Einlesen der Datei
  .pipe(gunzipStream) // Dekomprimieren der eingelesenen Daten
  .pipe(outputStream); // Schreiben der Archivdatei