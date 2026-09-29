'use strict';
const regExp = /[abcde]/;
console.log(regExp.test('a'));      // true
console.log(regExp.test('f'));      // false
console.log(regExp.test('afghj'));  // true
console.log(regExp.test('fghij'));  // false