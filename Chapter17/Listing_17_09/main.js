'use strict';
import { readFile } from 'fs';
readFile('input.txt', (error, data) => {
  if (error) {
    return console.error(error);
  }
  console.log(data.toString());
});
