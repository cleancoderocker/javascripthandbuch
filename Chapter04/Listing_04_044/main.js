'use strict';
const john = {
  firstName: 'John',
  lastName: 'Doe'
}
console.log(Object.isExtensible(john));    // true
john.age = 44;                             // define new property
console.log(john.age);                     // 44
Object.preventExtensions(john);            // prevent extensions
console.log(Object.isExtensible(john));    // false
john.firstName = 'James';                  // permitted: change existing property
console.log(john.firstName);               // "James"
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable);  // true
Object.defineProperty(john, 'firstName', { // permitted: change property attributes
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable);  // false
john.weight = 88;                          // TypeError: Can't add property weight, 
                                           // object is not extensible
