'use strict';
const item = Object.create(Object.prototype, {
  name: {
    value: 'Schrödinger programmiert Java'
  },
  price: {
    value: 44.90
  },
  author: {
    value: 'Philip Ackermann'
  },
  isbn: {
    value: '978-3-8362-7272-8'
  },
  printDescription: {
    value: function() {
      console.log(`${this.author}: ${this.name}`);
    }
  }
});
console.log(item.name);   // "Schrödinger programmiert Java"
console.log(item.price);  // 44.90
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn);   // "978-3-8362-7272-8"
item.printDescription();  // "Philip Ackermann: Schrödinger programmiert Java"