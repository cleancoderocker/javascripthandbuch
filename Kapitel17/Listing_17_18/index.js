'use strict';
const fs = require('fs');
fs.rmdir('test', (error) => {
  if (error) {
    return console.error(error);
  }
});