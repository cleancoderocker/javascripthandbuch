'use strict';
const person = {
  firstName : 'John', 
  lastName : 'Doe',
  address : {
    postCode : '23456',
    street : '22, Sample Street' 
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
console.log(firstNameExtracted); // "John"
console.log(lastNameExtracted);  // "Doe"
console.log(postCodeExtracted);  // "23456"
console.log(streetExtracted);    // "22, Sample Street"
