'use strict';
let item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3836217408'
)
console.log(Item.prototype);              // Item {}
console.log(item.__proto__);              // Item {}
console.log(Object.getPrototypeOf(item)); // Item {}
console.log(item.constructor);            // function Item(...)