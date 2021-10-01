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
for (let {firstName:f, lastName:l, contact:{email:e, phone:p}} of persons) {
  console.log(`${f} ${l}`);
  console.log(`E-Mail: ${e}`);
  console.log(`Telefon: ${p}`);
}