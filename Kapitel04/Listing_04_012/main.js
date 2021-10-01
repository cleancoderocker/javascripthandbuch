'use strict';
const item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3-8362-7272-8'
)
console.log(Item.prototype);              // Item {}
console.log(item.__proto__);              // Item {}
console.log(Object.getPrototypeOf(item)); // Item {}
console.log(item.constructor);            // function Item(...)