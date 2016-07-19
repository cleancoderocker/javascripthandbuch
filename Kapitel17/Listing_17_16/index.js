'use strict';
const fs = require('fs');
fs.mkdir('test', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('Verzeichnis erstellt');
});