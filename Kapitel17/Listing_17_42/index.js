'use strict';
const fs = require('fs');
const path = require('path');
const INPUT = path.join(__dirname, '..', 'large.file');
const writableStream = fs.createWriteStream(INPUT);
for (let i = 0; i <= 100000; i++) {
  writableStream.write(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...\n',
    'utf-8',
    () => {
      // Callback, wenn Daten geschrieben
    }
  );
}
writableStream.end(
  'Letzte Zeile',
  'utf-8',
  () => {
    // Callback, wenn Daten fertig geschrieben
  }
);