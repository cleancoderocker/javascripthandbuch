'use strict';
const max = {
  firstName: 'Max',
  lastName: 'Mustermann'
}
const max2 = max;
max2.firstName = 'Moritz';
console.log(max2.firstName); // "Moritz"
console.log(max.firstName);  // "Moritz"