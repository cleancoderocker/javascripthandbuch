'use strict';
const person = {
  'first-name': 'John', 
  'last-name': 'Doe'
}
// console.log(person.first-name);  // Syntax error
// console.log(person.last-name);   // Syntax error
console.log(person['first-name']);  // "John"
console.log(person['last-name']);   // "Doe"
 
const firstName = 'first-name';
const lastName = 'last-name';
 
console.log(person[firstName]);  // "John"
console.log(person[lastName]);   // "Doe"
 
const name = 'name';
const prefixFirstName = 'first-';
const prefixLastName = 'last-';
 
console.log(person[prefixFirstName + name]);  // "John"
console.log(person[prefixLastName + name]);   // "Doe"
