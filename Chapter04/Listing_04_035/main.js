'use strict';
const item = {};
Object.defineProperties(item, {
  name: {
    value: 'JavaScript: The Comprehensive Guide'
  },
  price: {
    value: 59.95
  },
  author: {
    value: 'Philip Ackermann'
  },
  isbn: {
    value: '978-1-4932-2286-5'
  },
  printDescription: {
    value: function() {
      console.log(`${this.author}: ${this.name}`);
    }
  }
});
console.log(item.name);   // "JavaScript: The Comprehensive Guide"
console.log(item.price);  // 44.9
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn);   // "978-1-4932-2286-5"
