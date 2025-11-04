'use strict';
const person = {
  firstName : 'Max',
  lastName : 'Mustermann',
  address : {
    postCode : '23456',
    street : 'Musterstraße 22'
  }
}
const {
  firstName,
  lastName,
  address : {
    postCode,
    street
    }
  } = person;
console.log(firstName);   // "Max"
console.log(lastName);    // "Mustermann"
console.log(postCode);    // "23456"
console.log(street);      // "Musterstraße 22"
