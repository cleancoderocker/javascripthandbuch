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
  firstName, 
  lastName, 
  address : {
    postCode, 
    street
  }
} = person;
console.log(firstName); // "John"
console.log(lastName);  // "Doe"
console.log(postCode);  // "23456"
console.log(street);    // "22, Sample Street"

