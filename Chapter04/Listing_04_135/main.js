'use strict';
const regExp = /^Southampton$/;
console.log(regExp.test('Southampton'));                   // true
console.log(regExp.test('In Southampton'));                // false
console.log(regExp.test('Southampton Port'));              // false
