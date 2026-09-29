'use strict';
function example(x) {
  console.log(x);
  x.value = 5;
  console.log(x);
}
let y = {
  value: 4711
};
console.log(y.value);   // Output: 4711
example(y);             // Output: first 4711, then 5
console.log(y.value);   // Output: 5
