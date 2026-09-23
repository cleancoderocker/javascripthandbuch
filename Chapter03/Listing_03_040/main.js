'use strict';
const dog = {
  name: 'Bello'
}
const person = {
  firstName: 'John', 
  lastName: 'Doe', 
  pet: dog
}
console.log(person.pet);  // Output: Object {name: "Bello"}
person.pet = null;
console.log(person.pet);  // Output: null
