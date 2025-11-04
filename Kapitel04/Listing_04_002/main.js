'use strict';
function example(x) {
  console.log(x);
  x = 5;
  console.log(x);
}
let y = 4711;
console.log(y);   // Ausgabe: 4711
example(y);       // Ausgabe: erst 4711, dann 5
console.log(y);   // Ausgabe: 4711
