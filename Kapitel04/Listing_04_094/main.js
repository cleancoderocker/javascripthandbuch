'use strict';
function printContactInformation(
  {
    contact: {
      email: email,
      phone: phone
      }
    }
) {
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
printContactInformation(person);