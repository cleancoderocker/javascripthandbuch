'use strict';
const regExp = /............./;
console.log(regExp.test('Hello World'));            // false
console.log(regExp.test('Max Mustermann'));         // true
console.log(regExp.test('Hello Max Mustermann'));   // true 
