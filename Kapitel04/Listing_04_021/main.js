'use strict';
const item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: '978-3-8362-7272-8',
  printDescription: function() {
    console.log(`${this.author}: ${this.name}`);
  }
}
const itemName = item.name;
item.printDescription();