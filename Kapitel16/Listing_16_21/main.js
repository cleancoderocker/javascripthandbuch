'use strict';
function* returnOneThenReturnTwo() {
  console.log('A');
  yield 1;
  console.log('B');
  yield 2;
  console.log('C');
}
let generator = returnOneThenReturnTwo();   // Aufruf der Generatorfunktion erzeugt einen Generator.
let result = generator.next();              // Ausgabe: "A"
console.log(result);                        // Ausgabe: {done: false, value: 1}
result = generator.next();                  // Ausgabe: "B"
console.log(result);                        // Ausgabe: {done: false, value: 2}
result = generator.next();                  // Ausgabe: "C"
console.log(result);                        // Ausgabe: {done: true, value: undefined}
let generator2 = returnOneThenReturnTwo();  // ein zweiter Generator
let result2 = generator2.next();            // Ausgabe: "A"
console.log(result2);                       // Ausgabe: {done: false, value: 1}
result = generator2.next();                 // Ausgabe: "B"
console.log(result2);                       // Ausgabe: {done: false, value: 2}
result = generator2.next();                 // Ausgabe: "C"
console.log(result2);                       // Ausgabe: {done: true, value: undefined}