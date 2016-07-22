'use strict';
let item = {
  name: 'Schrödinger programmiert Java',
  price: 44.90,
  author: 'Philip Ackermann ',
  isbn: ' 978-3836217408',
  printDescription: function() {
    console.log(this.author + ': ' + this.name);
  }
}
let properties = Object.keys(item);
for(let i=0; i<properties.length; i++) {
  let property = properties[i];
  console.log('Name: ' + property);
  console.log('Wert: ' + item[property]);
}
printArray(properties);
function printArray(array) {
  for(let i=0; i<array.length; i++) {
    console.log(array[i]);
  }
}