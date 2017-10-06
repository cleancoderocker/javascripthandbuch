'use strict';
let max = {
  firstName: 'Max',
  lastName: 'Mustermann'
}
let max2 = max;
max2.firstName = 'Moritz';
console.log(max2.firstName); // "Moritz"
console.log(max.firstName); // "Moritz"