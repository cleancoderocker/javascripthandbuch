'use strict';
let firstName = Symbol('firstName');
let lastName = Symbol('lastName');
let person = {};
person[firstName] = 'Max';
person[lastName] = 'Mustermann';
console.log(person[firstName]);     // "Max"
console.log(person[lastName]);      // "Mustermann"
console.log(person[0]);             // undefined
console.log(person[1]);             // undefined
console.log(person.firstName);      // undefined
console.log(person.lastName);       // undefined
console.log(person['firstName']);   // undefined
console.log(person['lastName']);    // undefined