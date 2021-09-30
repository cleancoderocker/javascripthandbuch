'use strict';
let person = {
  'first-name': 'Max',
  'last-name': 'Mustermann'
}
// console.log(person.first-name);  // Syntaxfehler
// console.log(person.last-name);   // Syntaxfehler
console.log(person['first-name']);  // "Max"
console.log(person['last-name']);   // "Mustermann"

let firstName = 'first-name';
let lastName = 'last-name';

console.log(person[firstName]);  // "Max"
console.log(person[lastName]);   // "Mustermann"

let name = 'name';
let prefixFirstName = 'first-';
let prefixLastName = 'last-';

console.log(person[prefixFirstName + name]);  // "Max"
console.log(person[prefixLastName + name]);   // "Mustermann"
