'use strict';
function example(x) {
  console.log(x.value);
  x.value = 5;
  console.log(x.value);
}
let y = {
  value: 4711
};
console.log(y.value);
example(y);
console.log(y.value);