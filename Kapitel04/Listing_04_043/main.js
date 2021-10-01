'use strict';
const firstName = 'firstName';
const lastName = 'lastName';
const person = {};
person[firstName] = 'Max';
person[lastName] = 'Mustermann';
console.log(person[firstName]);     // "Max"
console.log(person[lastName]);      // "Mustermann"
console.log(person[0]);             // undefined
console.log(person[1]);             // undefined
console.log(person.firstName);      // "Max"
console.log(person.lastName);       // "Mustermann"
console.log(person['firstName']);   // "Max"
console.log(person['lastName']);    // "Mustermann"