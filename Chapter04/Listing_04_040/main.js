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
const keys = Object.keys(item);
console.log(keys);
// [ 
//   'name',
//   'price',
//   'author',
//   'isbn',
//   'printDescription'
// ]
const values = Object.values(item);
console.log(values);
// [ 
//   'JavaScript: The Comprehensive Guide',
//    44.9,
//    'Philip Ackermann',
//    '978-1-4932-2286-5',
//    [Function: printDescription] 
// ]
const entries = Object.entries(item);
console.log(entries);
// [
//   [ 'name', 'JavaScript: The Comprehensive Guide' ],
//   [ 'price', 44.9 ],
//   [ 'author', 'Philip Ackermann' ],
//   [ 'isbn', '978-1-4932-2286-5' ],
//   [ 'printDescription', [Function: printDescription] ]
// ]
