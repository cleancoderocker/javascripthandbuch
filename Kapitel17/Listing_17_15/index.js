'use strict';
import fs from 'fs';
fs.writeFile('output.txt', 'Hallo Welt', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('Datei erstellt');
  fs.unlink('output.txt', (error) => {
    if (error) {
    return console.error(error);
  }
  console.log('Datei wieder gelöscht');
  });
});