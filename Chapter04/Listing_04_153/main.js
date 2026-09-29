'use strict';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
const string = 'A phone number: 49 30 1234567, and one more: 49 30 1234568';
const result = string.match(regExp);
console.log(result[0]);      // 49 30 1234567
console.log(result[1]);      // 49 30 1234568
const result2 = regExp.exec(string);
console.log(result2[0]);     // 49 30 1234567
console.log(result2[1]);     // undefined
