'use strict';
function example(x) {
  console.log(x);
  x = 5;
  console.log(x);
}
let y = 4711;
console.log(y);   // Output: 4711
example(y);       // Output: first 4711, then 5
console.log(y);   // Output: 4711
