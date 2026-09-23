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
const item2 = {};
item2.name = 'JavaScript: The Comprehensive Guide';
item2.price = 59.95;
item2.author = 'Philip Ackermann';
item2.isbn = '978-1-4932-2286-5';
item2.printDescription = function() {
  console.log(`${this.author}: ${this.name}`);
}
