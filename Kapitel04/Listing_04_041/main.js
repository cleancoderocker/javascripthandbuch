'use strict';
const max = {
  firstName: 'Max',
  lastName: 'Mustermann'
}
console.log(Object.isExtensible(max));  // true
console.log(Object.isSealed(max));      // false
console.log(Object.isFrozen(max));      // false
max.age = 44;                           // neue Eigenschaft
console.log(max.age);                   // 44
Object.freeze(max);                     // Objekt einfrieren
console.log(Object.isExtensible(max));  // false
console.log(Object.isSealed(max));      // true
console.log(Object.isFrozen(max));      // true
max.firstName = 'Moritz';               // TypeError: Cannot assign to read only
                                        // property 'firstName' of #<Object>