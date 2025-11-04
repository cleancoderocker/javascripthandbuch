'use strict';
const person = {
  firstName : 'Max',
  lastName : 'Mustermann',
  address : {
    postCode : '23456',
    street : 'Musterstraße 22'
  },
  phoneNumbers : [
    '02345/23456786',
    '02345/23456789'
  ]
}
const {
  firstName : firstNameExtracted,
  lastName : lastNameExtracted,
  address : {
    postCode : postCodeExtracted,
    street : streetExtracted
    },
  phoneNumbers : [
    phoneNumber1Extracted,
    phoneNumber2Extracted
    ]
  } = person;
console.log(firstNameExtracted);      // "Max"
console.log(lastNameExtracted);       // "Mustermann"
console.log(postCodeExtracted);       // "23456"
console.log(streetExtracted);         // "Musterstraße 22"
console.log(phoneNumber1Extracted);   // "02345/23456786"
console.log(phoneNumber2Extracted);   // "02345/23456789"