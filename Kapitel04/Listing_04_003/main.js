'use strict';
function example(x) {
  console.log(x.value);
  x.value = 5;
  console.log(x.value);
}
let y = {
  value: 4711
};
console.log(y.value);   // Ausgabe: 4711
example(y);             // Ausgabe: erst 4711, dann 5
console.log(y.value);   // Ausgabe: 5
