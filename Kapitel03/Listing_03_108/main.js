'use strict';
function printPersonInformation(firstName, lastName, age) {
  if(firstName !== undefined) {
    console.log(`Vorname: ${firstName}`);
  }
  if(lastName !== undefined) {
    console.log(`Nachname: ${lastName}`);
  }
  if(age !== undefined) {
    console.log(`Alter: ${age}`);
  }
}