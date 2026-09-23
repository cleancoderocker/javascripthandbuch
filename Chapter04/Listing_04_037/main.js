'use strict';
const item = {
  name: 'JavaScript: The Comprehensive Guide',
  price: 59.95,
  author: 'Philip Ackermann',
  isbn: '978-1-4932-2286-5',
  printDescription: function() {
    console.log(`${this.author}: ${this.name}`);
  }
}
console.log('price' in item);   // Output: true
console.log(item.price);        // Output: 44.9
item.price = null;              //
console.log('price' in item);   // Output: true
console.log(item.price);        // Output: null
item.price = undefined;         //
console.log('price' in item);   // Output: true
console.log(item.price);        // Output: undefined
