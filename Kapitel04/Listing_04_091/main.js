'use strict';
const persons = [
  {
    firstName: 'Max',
    lastName: 'Mustermann',
    contact: {
      email: 'max.mustermann@javascripthandbuch.de',
      phone: '02345/23456789'
    }
  },
  {
    firstName: 'Maxi',
    lastName: 'Musterfrau',
    contact: {
      email: 'maxi.musterfrau@javascripthandbuch.de',
      phone: '02345/23456789'
    }
  }
];
for (let
       {
         firstName: firstName,
         lastName: lastName,
         contact: {
           email: email,
           phone: phone
           }
         } of persons) {
  console.log(`${firstName} ${lastName}`);
  console.log(`E-Mail: ${email}`);
  console.log(`Telefon: ${phone}`);
}