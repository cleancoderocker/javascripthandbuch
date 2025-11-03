'use strict';
import fs from 'fs';
fs.rmdir('test', (error) => {
  if (error) {
    return console.error(error);
  }
});