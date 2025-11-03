'use strict';
import fs from 'fs';
fs.readdir('test', (error, files) => {
  if (error) {
    return console.error(error);
  }
  files.forEach( (file) => {
    console.log( file );
  });
});