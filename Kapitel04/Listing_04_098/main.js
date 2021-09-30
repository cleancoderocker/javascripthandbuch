'use strict';
const regExp = /^abcdef?$/;
console.log(regExp.test('abcde'));    // true
console.log(regExp.test('abcdef'));   // true
console.log(regExp.test('abcdeff'));  // false