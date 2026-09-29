'use strict';
const regExp = /\d\d\s\d\d\s\d\d\d\d\d\d\d/;
console.log(regExp.test('49 30 1234567'));        // true
console.log(regExp.test('Hello World'));          // false
console.log(regExp.test('Hello Max Mustermann')); // false
console.log(regExp.test('49 30 12345678'));       // true
console.log(regExp.test('49X30X1234567'));        // false
