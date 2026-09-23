'use strict';
const regExp = /^abcdef+$/;
console.log(regExp.test('abcde'));    // false
console.log(regExp.test('abcdef'));   // true
console.log(regExp.test('abcdeff'));  // true