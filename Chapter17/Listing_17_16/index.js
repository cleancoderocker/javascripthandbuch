'use strict';
import fs from 'fs';
fs.mkdir('test', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('Directory created');
});
