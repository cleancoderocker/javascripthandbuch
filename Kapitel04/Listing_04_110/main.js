'use strict';
let regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
let string = 'Eine Telefonnummer: 49 30 1234567, und noch eine: 49 30 1234568';
let result = string.match(regExp);
console.log(result[0]);             // 49 30 1234567
console.log(result[1]);             // 49 30 1234567
let result2 = regExp.exec(string);
console.log(result2[0]);            // 49 30 1234567
console.log(result2[1]);            // undefined