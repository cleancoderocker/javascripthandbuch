'use strict';
const max = {
  firstName: 'Max',
  lastName: 'Mustermann',
  contact: {
    email: 'max.mustermann@javascripthandbuch.de'
  }
};

const moritz = {
  firstName: 'Moritz',
  lastName: 'Mustermann',
};

if (max.contact && max.contact.email) {
  console.log(max.contact.email);
}

if (moritz.contact && moritz.contact.email) {
  console.log(moritz.contact.email);
}