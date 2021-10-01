'use strict';
const regExp = /............./;
console.log(regExp.test('Hallo Welt'));           // false
console.log(regExp.test('Max Mustermann'));       // true
console.log(regExp.test('Hallo Max Mustermann')); // true