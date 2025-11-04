'use strict';
const person = {
  firstName: 'Max',
  lastName: 'Mustermann',
  age: 33,
  hairColor: 'brown',
  height: 1.8
};
const {
  firstName,
  lastName,
  ...properties
} = person;
console.log(firstName);  // Max
console.log(lastName);   // Mustermann
console.log(properties); 
// {
// age: 33,
// hairColor: 'brown',
// height: 1.8
// }