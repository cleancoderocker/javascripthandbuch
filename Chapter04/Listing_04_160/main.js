'use strict';
const numbers = [2,3,4,5];
function forAll(array, f) {
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
forAll(numbers, print);
forAll(numbers, printModulo);