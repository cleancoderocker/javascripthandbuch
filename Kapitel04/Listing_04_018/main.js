'use strict';
const item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: '978-3-8362-7272-8',
  printDescription: function() {
    console.log(`${this.author}: ${this.name}`);
  }
}
const propertyDescriptor = Object.getOwnPropertyDescriptor(item, 'name');
console.log(propertyDescriptor.enumerable);       // true
console.log(propertyDescriptor.configurable);     // true
console.log(propertyDescriptor.writable);         // true
console.log(propertyDescriptor.value);            // "Schrödinger programmiert Java"