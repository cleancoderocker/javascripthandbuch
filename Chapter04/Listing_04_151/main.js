'use strict';
const pattern = /^(\d{4})-(\d{2})-(\d{2})$/u;
const result = pattern.exec('2025-08-30');
console.log(result[0]);     // 2025-08-30
console.log(result[1]);     // 2025
console.log(result[2]);     // 08
console.log(result[3]);     // 30
console.log(result.index);  // 0
console.log(result.input);  // 2025-08-30
