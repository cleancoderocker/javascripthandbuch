'use strict';
function divide(x, y) {
  return normalized(x) / normalized(y);
}
function normalize(x) {
  return x <= 0 ? 1 : x;
}
console.log(normalize(-2));  // Output: 1
console.log(normalize(5));   // Output: 5
console.log(divide(-2, 5));  // ReferenceError: normalized is not defined
