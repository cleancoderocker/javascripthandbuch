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

const propertyDescriptor = Object.getOwnPropertyDescriptor(item, 'name');
console.log(propertyDescriptor.enumerable);    // true
console.log(propertyDescriptor.configurable);  // true
console.log(propertyDescriptor.writable);      // true
console.log(propertyDescriptor.value);         // "JavaScript: The Comprehensive Guide"
