'use strict';
const item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann ',
  isbn: ' 978-3-8362-7272-8',
  printDescription: function () {
    console.log(`${this.author}: ${this.name}`);
  }
}

const keys = Object.keys(item);
console.log(keys);
// [
// 'name',
// 'price',
// 'author',
// 'isbn',
// 'printDescription'
// ]
const values = Object.values(item);
console.log(values);
// [
// 'Schrödinger programmiert Java',
// 44.9,
// 'Philip Ackermann',
// '978-3-8362-7272-8',
// [Function: printDescription]
// ]
const entries = Object.entries(item);
console.log(entries);
// [
// [ 'name', 'Schrödinger programmiert Java' ],
// [ 'price', 44.9 ],
// [ 'author', 'Philip Ackermann' ],
// [ 'isbn', '978-3-8362-7272-8' ],
// [ 'printDescription', [Function: printDescription] ]
// ]