'use strict';
const john = {
  firstName: 'John',
  lastName: 'Doe'
};

const james = {
  firstName: 'James',
  lastName: 'Doe'
};

const isJohnAndJames = john && james;
console.log(isJohnAndJames);  
// Output: Object {firstName: "James", lastName: "Doe"}

console.log(false && 'John');  // Output: false
console.log('John' && null);   // Output: null
console.log(null && 'John');   // Output: null
