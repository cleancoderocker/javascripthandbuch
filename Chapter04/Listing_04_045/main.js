'use strict';
const john = {
  firstName: 'John',
  lastName: 'Doe'
}
console.log(Object.isExtensible(john));    // true
console.log(Object.isSealed(john));        // false
john.age = 44;                             // define new property
console.log(john.age);                     // 44
Object.seal(john);                         // seal object
console.log(Object.isExtensible(john));    // false
console.log(Object.isSealed(john));        // true
john.firstName = 'James';                  // permitted: change existing property
console.log(john.firstName);               // "James"
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable);  // true
Object.defineProperty(john, 'firstName', { // Uncaught TypeError: Cannot redefine 
                                           // property: firstName
    enumerable: false
});
