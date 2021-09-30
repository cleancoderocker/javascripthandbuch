'use strict';
function printPersonInformation(firstName, lastName, age, ...restArgs) {
  console.log(`Vorname: ${firstName}`);
  console.log(`Nachname: ${lastName}`);
  console.log(`Alter: ${age}`);
  if(restArgs.length > 0) {
    console.log(`Größe: ${restArgs[0]}`);
  }
  if(restArgs.length > 1) {
    console.log(`Gewicht: ${restArgs[1]}`);
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