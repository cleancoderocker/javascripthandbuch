'use strict';
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 33,
  hairColor: 'brown',
  height: 1.8
};

const {
  firstName,
  lastName,
  ...properties
} = person;

console.log(firstName);    // John
console.log(lastName);     // Doe
console.log(properties);   // {
                           //   age: 33, 
                           //   hairColor: 'brown', 
                           //   height: 1.8
                           // }
