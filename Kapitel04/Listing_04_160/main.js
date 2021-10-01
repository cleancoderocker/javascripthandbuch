'use strict';
const numbers = [2,3,4,5];
function print(item) {
  console.log('Item: ' + item);
}
function modulo(item) {
  console.log(item + ' % 2 = ' + item % 2);
}
numbers.forEach(print);
numbers.forEach(modulo);