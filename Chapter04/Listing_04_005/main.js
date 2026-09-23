'use strict';
const john = {
  firstName: 'John',
  lastName: 'Doe'
}

const numbers = [2,3,4,5,6,7,8,9];

function add(x, y) {
  return x + y;
}
console.log(john instanceof Object);     // true
console.log(john instanceof Array);      // false
console.log(numbers instanceof Object);  // true
console.log(numbers instanceof Array);   // true
console.log(add instanceof Function);    // true
console.log(add instanceof Object);      // true
