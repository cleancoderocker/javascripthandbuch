'use strict';
// Ausgabe: 3
[2,3,4,5,6,7,2,3,4,5].find(
  (element) => {
    return element % 2 !== 0;
  });
// Ausgabe: 1
[2,3,4,5,6,7,2,3,4,5].findIndex(
  (element) => {
    return element % 2 !== 0;
  });