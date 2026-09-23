'use strict';
function Item(name, price, author, isbn) {
  this.name = name;
  this.price = price;
  this.author = author;
  this.isbn = isbn;
  this.printDescription = function() {
    console.log(`${this.author}: ${this.name}`);
  }
}

const item = new Item(
  'JavaScript: The Comprehensive Guide', 
  59.95, 
  'Philip Ackermann',
  '978-1-4932-2286-5'
)
console.log(Item.prototype);              // Item {}
console.log(item.__proto__);              // Item {}
console.log(Object.getPrototypeOf(item)); // Item {}
console.log(item.constructor);            // function Item(...)