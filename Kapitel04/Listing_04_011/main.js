'use strict';
const item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3-8362-7272-8'
)
console.log(typeof item);           // object
console.log(item instanceof Item);  // true