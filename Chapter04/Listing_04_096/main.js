'use strict';
const firstName = 'John';
const lastName = 'Doe';
const properties = {
  age: 33,
  hairColor: 'brown',
  height: 1.8
};

const person = {
  firstName,
  lastName,
  ...properties
};

console.log(person);
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 33,
//   hairColor: 'brown',
//   height: 1.8
// }
