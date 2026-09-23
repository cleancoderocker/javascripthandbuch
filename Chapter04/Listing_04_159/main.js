'use strict';
const numbers = [2,3,4,5];
function every(array, f) {
  for(let i=0; i<array.length; i++) {
    f(array[i]);
  }
}
function print(item) {
  console.log('Item: ' + item);
}
function printModulo(item) {
  console.log(item + ' % 2 = ' + item % 2);
}
every(numbers, print);
every(numbers, printModulo);