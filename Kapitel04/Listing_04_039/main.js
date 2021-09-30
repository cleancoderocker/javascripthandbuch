'use strict';
const max = {
  firstName: 'Max',
  lastName: 'Mustermann'
}
console.log(Object.isExtensible(max));  // true
max.age = 44;                           // neue Eigenschaft definieren
console.log(max.age);                   // 44
Object.preventExtensions(max);          // Erweiterungen verhindern
console.log(Object.isExtensible(max));  // false
max.firstName = 'Moritz';               // Erlaubt: bestehende Eigenschaft ändern
console.log(max.firstName);             // "Moritz"
console.log(Object.getOwnPropertyDescriptor(max, 'firstName').enumerable); // true
Object.defineProperty(max, 'firstName', { // Erlaubt: Eigenschaftsattribute ändern
  enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(max, 'firstName').enumerable); // false
max.weight = 88; // TypeError: Can't add property weight,
// object is not extensible