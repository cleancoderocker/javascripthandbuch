'use strict';
const firstName = 'firstName';
const lastName = 'lastName';
const person = {};
person[firstName] = 'John';
person[lastName] = 'Doe';
console.log(person[firstName]);    // "John"
console.log(person[lastName]);     // "Doe"
console.log(person[0]);            // undefined
console.log(person[1]);            // undefined
console.log(person.firstName);     // "John"
console.log(person.lastName);      // "Doe"
console.log(person['firstName']);  // "John"
console.log(person['lastName']);   // "Doe"
