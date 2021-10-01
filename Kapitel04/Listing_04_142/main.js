'use strict';
const regExp = /^abcdef{2}$/;
console.log(regExp.test('abcde'));      // false
console.log(regExp.test('abcdef'));     // false
console.log(regExp.test('abcdeff'));    // true
console.log(regExp.test('abcdefff'));   // false
console.log(regExp.test('abcdeffff'));  // false