'use strict';
const regExp = /^Streuselkuchen$/;
console.log(regExp.test('Streuselkuchen'));         // true
console.log(regExp.test('Der Streuselkuchen'));     // false
console.log(regExp.test('Streuselkuchengeschäft')); // false