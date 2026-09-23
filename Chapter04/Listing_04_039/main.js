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
const properties = Object.keys(item);
for(let i=0; i<properties.length; i++) {
  const property = properties[i];
  console.log(`Name: ${property}`);
  console.log(`Value: ${item[property]}`);
}
printArray(properties);
function printArray(array) {
  for(let i=0; i<array.length; i++) {
    console.log(array[i]);
  }
}
