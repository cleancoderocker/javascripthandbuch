'use strict';
const regExp = /\d\d\s\d\d\s\d\d\d\d\d\d\d/;
console.log(regExp.test('12349 30 12345678'));  // true
console.log(regExp.test('449 30 123456789'));   // true