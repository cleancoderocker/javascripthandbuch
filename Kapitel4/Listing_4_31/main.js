'use strict';
let item = {};
item['name'] = 'Schrödinger programmiert Java';
item['price'] = 44.90;
item['author'] = 'Philip Ackermann';
item['isbn'] = '978-3836217408';
item['printDescription'] = function() {
  console.log(this.author + ': ' + this.name);
}