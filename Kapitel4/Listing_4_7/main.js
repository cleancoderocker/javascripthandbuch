'use strict';
let item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: '978-3836217408',
  printDescription: function() {
    console.log(this.author + ': ' + this.name);
  }
}
console.log(item.name);   // "Schrödinger programmiert Java"
console.log(item.price);  // 44.90
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn);   // "978-3836217408"
item.printDescription();  // "Philip Ackermann: Schrödinger programmiert Java"