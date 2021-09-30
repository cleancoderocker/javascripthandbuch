'use strict';
const regExp = /............./;
console.log(regExp.test('49 30 1234567'));    // true
console.log(regExp.test('49 30 12345'));      // false
console.log(regExp.test('49 30 123456789'));  // true