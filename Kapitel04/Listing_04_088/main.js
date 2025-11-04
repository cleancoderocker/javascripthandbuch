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
  firstName : firstNameExtracted,
  lastName : lastNameExtracted,
  address : {
    postCode : postCodeExtracted,
    street : streetExtracted
    }
  } = person;
console.log(firstNameExtracted);  // "Max"
console.log(lastNameExtracted);   // "Mustermann"
console.log(postCodeExtracted);   // "23456"
console.log(streetExtracted);     // "Musterstraße 22"