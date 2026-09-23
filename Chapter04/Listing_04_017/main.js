'use strict';
class Item {
  constructor(name, price, author, isbn) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
  }
  printDescription() {
    console.log(`${this.author}: ${this.name}`);
  }
}
const item = new Item(
  'JavaScript: The Comprehensive Guide', 
  59.95, 
  'Philip Ackermann',
  '978-1-4932-2286-5'
)
console.log(typeof item);           // object
console.log(item instanceof Item);  // true