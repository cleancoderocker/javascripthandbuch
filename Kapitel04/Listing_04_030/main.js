'use strict';
let item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: ' 978-3-8362-7272-8',
  printDescription: function() {
    console.log(`${this.author}: ${this.name}`);
  }
}
let item = {};
item.name = 'Schrödinger programmiert Java';
item.price = 44.90;
item.author = 'Philip Ackermann ';
item.isbn = '978-3-8362-7272-8';
item.printDescription = function() {
  console.log(`${this.author}: ${this.name}`);
}