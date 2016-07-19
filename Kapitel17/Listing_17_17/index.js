'use strict';
const fs = require('fs');
fs.readdir('test', (error, files) => {
  if (error) {
    return console.error(error);
  }
  files.forEach( (file) => {
    console.log( file );
  });
});