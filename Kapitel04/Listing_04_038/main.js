'use strict';
let max = {
  firstName: 'Max'
}
let maxMustermann = Object.create(max, {
  lastName: {
    value: 'Mustermann',
    enumerable: true
  }
});
console.log(max.firstName);           // Max
console.log(max.lastName);            // undefined
console.log(maxMustermann.firstName); // Max
console.log(maxMustermann.lastName);  // Mustermann
// Ausgabe: lastName, firstName
for(let i in maxMustermann) {
  console.log(i);
}
let properties = Object.keys(maxMustermann);
// Ausgabe: ["lastName"]
console.log(properties);