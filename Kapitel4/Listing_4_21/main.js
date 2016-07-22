'use strict';
let person = {
  'first-name': 'Max',
  'last-name': 'Mustermann'
}
// console.log(person.first-name);  // Syntaxfehler
// console.log(person.last-name);   // Syntaxfehler
console.log(person['first-name']);  // "Max"
console.log(person['last-name']);   // "Mustermann"