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

// Zugriff auf geschachtelte Eigenschaft über 
// Optional Chaining Operator:
console.log(max.contact?.email);
console.log(moritz.contact?.email); // Ausgabe: undefined

// Alternativ auch möglich: Verwendung des
// Operators auf mehreren Hierarchieebenen:
console.log(max?.contact?.email);
console.log(moritz?.contact?.email); // Ausgabe: undefined
