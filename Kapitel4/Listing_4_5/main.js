'use strict';
let max = {
  firstName: 'Max',
  lastName: 'Mustermann'
}
let numbers = [2,3,4,5,6,7,8,9];
function add(x, y) {
  return x + y;
}
console.log(max instanceof Object);       // true
console.log(max instanceof Array);        // false
console.log(numbers instanceof Object);   // true
console.log(numbers instanceof Array);    // true
console.log(add instanceof Function);     // true
console.log(add instanceof Object);       // true