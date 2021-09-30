'use strict';
const moritz = {
  firstName: 'Moritz',
};
moritz.firstName ||= 'Max';
moritz.lastName ||= 'Mustermann';
console.log(moritz);
// { firstName: 'Moritz', lastName: 'Mustermann' }

// Vor ES2021 war Folgendes notwendig:
const peter = {
  firstName: 'Peter',
};
peter.firstName || (peter.firstName = 'Max');
peter.lastName || (peter.lastName = 'Mustermann');
console.log(peter);
// { firstName: 'Peter', lastName: 'Mustermann' }