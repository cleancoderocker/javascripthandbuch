'use strict';
const symbol1 = Symbol();
const symbol2 = Symbol('exampleDescription');
const symbol3 = Symbol();
const symbol4 = Symbol('exampleDescription');
console.log(symbol1);              // Output: Symbol()
console.log(symbol2);              // Output: Symbol(exampleDescription)
console.log(symbol3);              // Output: Symbol()
console.log(symbol4);              // Output: Symbol(exampleDescription)
console.log(symbol1 === symbol3);  // Output: false
console.log(symbol2 === symbol4);  // Output: false
