'use strict';
const symbol1 = Symbol();
const symbol2 = Symbol('exampleDescription');
const symbol3 = Symbol();
const symbol4 = Symbol('exampleDescription');
console.log(symbol1); // Ausgabe: Symbol()
console.log(symbol2); // Ausgabe: Symbol(exampleDescription)
console.log(symbol3); // Ausgabe: Symbol()
console.log(symbol4); // Ausgabe: Symbol(exampleDescription)
console.log(symbol1 === symbol3); // Ausgabe: false
console.log(symbol2 === symbol4); // Ausgabe: false