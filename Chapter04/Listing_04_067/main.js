'use strict';
const contacts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@javascripthandbuch.de'
  },
  {
    firstName: 'James',
    lastName: 'Dean',
    email: 'superjames@javascripthandbuch.de'
  },
  {
    firstName: 'Peter',
    lastName: 'Dickens',
    email: 'dickens@javascripthandbuch.de'
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
contacts.sort(compareByFirstName);  // sort by first name
console.log(contacts[0].firstName); // James
console.log(contacts[1].firstName); // John
console.log(contacts[2].firstName); // Peter
contacts.sort(compareByLastName);   // sort by last name
console.log(contacts[0].firstName); // James
console.log(contacts[1].firstName); // Peter
console.log(contacts[2].firstName); // John
contacts.sort(compareByEmail);      // sort by email address
console.log(contacts[0].firstName); // Peter
console.log(contacts[1].firstName); // John
console.log(contacts[2].firstName); // James
