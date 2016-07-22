'use strict';
function example(x) {
  console.log(x.value);
  x.name = 5;
  console.log(x.value);
}
let y = {
  name: 4711
};
console.log(y.value);
example(y);
console.log(y.value);