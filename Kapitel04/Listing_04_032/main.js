'use strict';
const item = {};
Object.defineProperty(item, 'name', {
  value: 'Schrödinger programmiert Java'
});
Object.defineProperty(item, 'price', {
  value: 44.90
});
Object.defineProperty(item, 'author', {
  value: 'Philip Ackermann'
});
Object.defineProperty(item, 'isbn', {
  value: '978-3-8362-7272-8'
});
Object.defineProperty(item, 'printDescription', {
  value: function() {
    console.log(`${this.author}: ${this.name}`);
  }
});
console.log(item.name);   // "Schrödinger programmiert Java"
console.log(item.price);  // 44.9
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn);   // "978-3-8362-7272-8"