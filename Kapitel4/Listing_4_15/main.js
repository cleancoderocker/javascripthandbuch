'use strict';
class Item {
  constructor(name, price, author, isbn) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
  }
  printDescription() {
    console.log(this.author + ': ' + this.name);
  }
}
let item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3836245838'
)
console.log(typeof item);           // object
console.log(item instanceof Item);  // true