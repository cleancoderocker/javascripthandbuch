'use strict';
let name = 'Max Mustermann';
let age = 44;
function getName() {
  return name;
}
let message = `Mein Name ist ${getName()}, ich bin das Doppelte von ${age/2} Jahren alt`;
console.log(message);
// "Mein Name ist Max Mustermann, ich bin das Doppelte von 22 Jahren alt."