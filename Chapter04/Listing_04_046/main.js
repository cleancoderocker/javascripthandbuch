'use strict';
const john = {
  firstName: 'John',
  lastName: 'Doe'
}
console.log(Object.isExtensible(john));  // true
console.log(Object.isSealed(john));      // false
console.log(Object.isFrozen(john));      // false
john.age = 44;                           // new property
console.log(john.age);                   // 44
Object.freeze(john);                     // freeze object
console.log(Object.isExtensible(john));  // false
console.log(Object.isSealed(john));      // true
console.log(Object.isFrozen(john));      // true
john.firstName = 'James';                // TypeError: Cannot assign to read only 
                                         // property 'firstName' of #<Object>
