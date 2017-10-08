'use strict';
let symbol1 = Symbol();
let symbol2 = Symbol('exampleDescription');
let symbol3 = Symbol();
let symbol4 = Symbol('exampleDescription');
console.log(symbol1); // Ausgabe: Symbol()
console.log(symbol2); // Ausgabe: Symbol(exampleDescription)
console.log(symbol3); // Ausgabe: Symbol()
console.log(symbol4); // Ausgabe: Symbol(exampleDescription)
console.log(symbol1 === symbol3); // Ausgabe: false
console.log(symbol2 === symbol4); // Ausgabe: false