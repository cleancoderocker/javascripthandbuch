'use strict';
const item = {
  name: 'JavaScript: The Comprehensive Guide',
  price: 59.95,
  author: 'Philip Ackermann',
  isbn: '978-1-4932-2286-5',
  printDescription: function() {
    console.log(`${this.author}: ${this.name}`);
  }
}
for(let property in item) {
  console.log(`Name: ${property}`);
  console.log(`Value: ${item[property]}`);
}
