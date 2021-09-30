'use strict';
const max = {
  firstName: 'Max',
  lastName: 'Mustermann'
}
console.log(Object.isExtensible(max));  // true
console.log(Object.isSealed(max));      // false
max.age = 44;                           // neue Eigenschaft definieren
console.log(max.age);                   // 44
Object.seal(max);                       // Objekt versiegeln
console.log(Object.isExtensible(max));  // false
console.log(Object.isSealed(max));      // true
max.firstName = 'Moritz';               // Erlaubt: bestehende Eigenschaft ändern
console.log(max.firstName);             // "Moritz"
console.log(Object.getOwnPropertyDescriptor(max, 'firstName').enumerable); // true
Object.defineProperty(max, 'firstName', { // Uncaught TypeError: Cannot redefine
// property: firstName
  enumerable: false
});