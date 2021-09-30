'use strict';
function* returnOneThenReturnTwo() {
  console.log('A');
  yield 1;
  console.log('B');
  yield 2;
  console.log('C');
}
const generator = returnOneThenReturnTwo();   // Aufruf der Generatorfunktion erzeugt einen Generator.
const result = generator.next();              // Ausgabe: "A"
console.log(result);                        // Ausgabe: {done: false, value: 1}
result = generator.next();                  // Ausgabe: "B"
console.log(result);                        // Ausgabe: {done: false, value: 2}
result = generator.next();                  // Ausgabe: "C"
console.log(result);                        // Ausgabe: {done: true, value: undefined}

const generator2 = returnOneThenReturnTwo();  // ein zweiter Generator
let result2 = generator2.next();            // Ausgabe: "A"
console.log(result2);                       // Ausgabe: {done: false, value: 1}
result2 = generator2.next();                 // Ausgabe: "B"
console.log(result2);                       // Ausgabe: {done: false, value: 2}
result2 = generator2.next();                 // Ausgabe: "C"
console.log(result2);                       // Ausgabe: {done: true, value: undefined}