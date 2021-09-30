'use strict';
let max = {
  firstName: 'Max',
  lastName: 'Mustermann',
  contact: {
    email: 'max.mustermann@javascripthandbuch.de'
  }
};

let moritz = {
  firstName: 'Moritz',
  lastName: 'Mustermann',
};

if (max.contact && max.contact.email) {
  console.log(max.contact.email);
}

if (moritz.contact && moritz.contact.email) {
  console.log(moritz.contact.email);
}