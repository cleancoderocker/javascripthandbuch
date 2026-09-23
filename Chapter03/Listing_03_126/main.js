'use strict';
function printPersonInformation(firstName, lastName, age) {
  if(firstName !== undefined) {
    console.log(`First name: ${firstName}`);
  }
  if(lastName !== undefined) {
    console.log(`Last name: ${lastName}`);
  }
  if(age !== undefined) {
    console.log(`Age: ${age}`);
  }
}

printPersonInformation('John', 'Doe', 44, 1.80);