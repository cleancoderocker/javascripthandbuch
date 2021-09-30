'use strict';
const person = {
  'first-name': 'Max',
  'last-name': 'Mustermann'
}
// console.log(person.first-name);  // Syntaxfehler
// console.log(person.last-name);   // Syntaxfehler
console.log(person['first-name']);  // "Max"
console.log(person['last-name']);   // "Mustermann"

const firstName = 'first-name';
const lastName = 'last-name';

console.log(person[firstName]);  // "Max"
console.log(person[lastName]);   // "Mustermann"

const name = 'name';
const prefixFirstName = 'first-';
const prefixLastName = 'last-';

console.log(person[prefixFirstName + name]);  // "Max"
console.log(person[prefixLastName + name]);   // "Mustermann"
