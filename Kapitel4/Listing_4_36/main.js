'use strict';
let item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann',
  isbn: ' 978-3836217408',
  printDescription: function() {
    console.log(this.author + ': ' + this.name);
  }
}
for(let property in item) {
  console.log('Name: ' + property);
  console.log('Wert: ' + item[property]);
}