'use strict';
let item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: '978-3836245838',
  printDescription: function() {
    console.log(this.author + ': ' + this.name);
  }
}
let itemName = item['name'];
item['printDescription']();