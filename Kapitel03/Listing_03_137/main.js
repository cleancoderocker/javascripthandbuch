'use strict';
function divide(x, y) {
  return normalized(x) / normalized(y);
}
function normalize(x) {
  return x <= 0 ? 1 : x;
}
console.log(normalize(-2)); // Ausgabe: 1
console.log(normalize(5));  // Ausgabe: 5
console.log(divide(-2, 5)); // ReferenceError: normalized is not defined