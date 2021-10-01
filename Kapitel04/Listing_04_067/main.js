'use strict';
const contacts = [
  {
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max.mustermann@javascripthandbuch.de'
  },
  {
    firstName: 'Moritz',
    lastName: 'Meier',
    email: 'coolmoritz@javascripthandbuch.de'
  },
  {
    firstName: 'Peter',
    lastName: 'Müller',
    email: 'mueller@javascripthandbuch.de'
  }
];
function compareByFirstName(contact1, contact2) {
  return contact1.firstName.localeCompare(contact2.firstName);
}
function compareByLastName(contact1, contact2) {
  return contact1.lastName.localeCompare(contact2.lastName);
}
function compareByEmail(contact1, contact2) {
  return contact1.email.localeCompare(contact2.email);
}
contacts.sort(compareByFirstName);  // Sortierung nach Vorname
console.log(contacts[0].firstName); // Max
console.log(contacts[1].firstName); // Moritz
console.log(contacts[2].firstName); // Peter
contacts.sort(compareByLastName);   // Sortierung nach Nachname
console.log(contacts[0].firstName); // Moritz
console.log(contacts[1].firstName); // Peter
console.log(contacts[2].firstName); // Max
contacts.sort(compareByEmail);      // Sortierung nach E-Mail-Adresse
console.log(contacts[0].firstName); // Moritz
console.log(contacts[1].firstName); // Max
console.log(contacts[2].firstName); // Peter