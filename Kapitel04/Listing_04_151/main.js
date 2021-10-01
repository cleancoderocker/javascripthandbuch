'use strict';
const pattern = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/u;
const result = pattern.exec('2018-03-27');
console.log(result.groups.year);  // '2018'
console.log(result.groups.month); // '03'
console.log(result.groups.day);   // '27'