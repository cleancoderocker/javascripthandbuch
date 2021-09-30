'use strict';
const dog = {
  name: 'Bello'
}
const person = {
  firstName: 'Max',
  lastName: 'Mustermann',
  pet: dog
}
console.log(person.pet); // Ausgabe: Object {name: "Bello"}
person.pet = null;
console.log(person.pet); // Ausgabe: null