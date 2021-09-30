'use strict';
function printPersonInformation(firstName, lastName, age) {
  console.log(`Vorname: ${firstName}`);
  console.log(`Nachname: ${lastName}`);
  console.log(`Alter: ${age}`);
  if(arguments.length > 3) {
    console.log(`Größe: ${arguments[3]}`);
  }
  if(arguments.length > 4) {
    console.log(`Gewicht: ${arguments[4]}`);
  }
}
printPersonInformation('Max', 'Mustermann', 44, 1.88, 88);
/* Ausgabe
 Vorname: Max
 Nachname: Mustermann
 Alter: 44
 Größe: 1.88
 Gewicht: 88
 */