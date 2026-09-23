'use strict';
const pattern = /^(\d{4})-(\d{2})-(\d{2})$/u;
const result = pattern.exec('2018-03-27');
console.log(result[0]);     // 2018-03-27
console.log(result[1]);     // 2018
console.log(result[2]);     // 03
console.log(result[3]);     // 27
console.log(result.index);  // 0
console.log(result.input);  // 2018-03-27
