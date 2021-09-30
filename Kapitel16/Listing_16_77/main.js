'use strict';
function printPerson(
  {
    firstName: firstName,
    lastName: lastName,
    contact: {
      email: email,
      phone: phone
      }
    }
) {
  console.log(`${firstName} ${lastName}`);
  console.log(`E-Mail: ${email}`);
  console.log(`Telefon: ${phone}`);

}
const person = {
  firstName: 'Max',
  lastName: 'Mustermann',
  contact: {
    email: 'max.mustermann@javascripthandbuch.de',
    phone: '02345/23456789'
  }
};
printPerson(person);