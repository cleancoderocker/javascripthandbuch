'use strict';
const fs = require('fs');
fs.writeFile('output.txt', 'Hallo Welt', (error) => {
  if (error) {
    return console.error(error);
  }
  fs.readFile('output.txt', (error, data) => {
    if (error) {
    return console.error(error);
  }
  console.log('Inhalt: ' + data.toString());
  });
  });
}