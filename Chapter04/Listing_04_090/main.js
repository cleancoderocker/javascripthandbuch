'use strict';
const person = {
  firstName : 'John', 
  lastName : 'Doe',
  address : {
    postCode : '23456',
    street : '22, Sample Street' 
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
console.log(firstNameExtracted);     // "John"
console.log(lastNameExtracted);      // "Doe"
console.log(postCodeExtracted);      // "23456"
console.log(streetExtracted);        // "22, Sample Street"
console.log(phoneNumber1Extracted);  // "02345/23456786"
console.log(phoneNumber2Extracted);  // "02345/23456789"
