'use strict';
let regExp = /^(\+?\d{2})\s(\d{2})\s(\d{5,7})$/;
let result = regExp.exec('49 30 1234567');
console.log(result[0]);     // 49 30 1234567
console.log(result[1]);     // 49
console.log(result[2]);     // 30
console.log(result[3]);     // 1234567
console.log(result.index);  // 0
console.log(result.input);  // 49 30 1234567