'use strict';
function divide(x, y) {
  return normalize(x) / normalize(y);
}
function normalize(x) {
  return x < 0 ? 1 : x;
}
console.log(divide(5, -1)); // Ausgabe: 5
console.log(divide(5, -2)); // Ausgabe: 5
console.log(divide(5, 0));  // Ausgabe: Infinity