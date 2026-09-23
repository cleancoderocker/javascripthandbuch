'use strict';
const array = [
  ['name', 'JavaScript: The Comprehensive Guide'],
  ['price', 59.95],
  ['author', 'Philip Ackermann'],
  ['isbn', '978-1-4932-2286-5'],
  ['printDescription', function () {
    console.log(`${this.author}: ${this.name}`);
  }]
];

const item = Object.fromEntries(array);
console.log(item.name);   // "JavaScript: The Comprehensive Guide"
console.log(item.price);  // 59.95
console.log(item.author); // "Philip Ackermann"
console.log(item.isbn);   // "978-1-4932-2286-5"
item.printDescription();  // "Philip Ackermann: JavaScript: The Comprehensive Guide"
