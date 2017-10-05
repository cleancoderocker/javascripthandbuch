'use strict';
let item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: '978-3836245838',
  printDescription: function() {
    console.log(this.author + ': ' + this.name);
  }
}
let propertyDescriptor = Object.getOwnPropertyDescriptor(item, 'name');
console.log(propertyDescriptor.enumerable);       // true
console.log(propertyDescriptor.configurable);     // true
console.log(propertyDescriptor.writable);         // true
console.log(propertyDescriptor.value);            // "Schrödinger programmiert Java"