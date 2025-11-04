'use strict';
const firstName = 'Max';
const lastName = 'Mustermann';
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
// firstName: 'Max',
// lastName: 'Mustermann',
// age: 33,
// hairColor: 'brown',
// height: 1.8
// }