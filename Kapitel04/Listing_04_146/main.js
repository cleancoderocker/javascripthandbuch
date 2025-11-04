'use strict';
const regExp = /^\d{2}\s\d{2}\s\d{5,7}$/;
console.log(regExp.test('49 30 1234567'));        // true
console.log(regExp.test('Hallo Welt'));           // false
console.log(regExp.test('Hallo Max Mustermann')); // false
console.log(regExp.test('49X30X1234567'));        // false
console.log(regExp.test('49 30 12345678'));       // false
console.log(regExp.test('449 30 1234567'));       // false
console.log(regExp.test('49 30 12345'));          // true
console.log(regExp.test('+49 30 1234567'));       // false