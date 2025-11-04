'use strict';
const pattern = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/u;
const result = pattern.exec('2025-08-30');
console.log(result.groups.year);  // '2025'
console.log(result.groups.month); // '08'
console.log(result.groups.day);   // '30'