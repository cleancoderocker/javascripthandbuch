'use strict';
const item = {};
Object.defineProperty(item, 'name', {
    value: 'JavaScript: The Comprehensive Guide'
});
Object.defineProperty(item, 'price', {
    value: 59.95
});
Object.defineProperty(item, 'author', {
    value: 'Philip Ackermann'
});
Object.defineProperty(item, 'isbn', {
    value: '978-1-4932-2286-5'
});
Object.defineProperty(item, 'printDescription', {
    value: function() {
      console.log(`${this.author}: ${this.name}`);
    }
});
console.log(item.name);   // "JavaScript: The Comprehensive Guide"
console.log(item.price);  // 59.95
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn);   // "978-1-4932-2286-5"
