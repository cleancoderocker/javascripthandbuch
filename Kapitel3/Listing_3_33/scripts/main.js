'use strict';
let dog = {
  name: 'Bello'
}
let person = {
  firstName: 'Max',
  lastName: 'Mustermann'
  pet: dog
}
console.log(person.pet); // Ausgabe: Object {name: "Bello"}
person.pet = null;
console.log(person.pet); // Ausgabe: null