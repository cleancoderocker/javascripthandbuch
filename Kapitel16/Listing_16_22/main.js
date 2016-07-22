'use strict';
function* returnOneThenReturnTwo() {
  console.log('A');
  yield 1;
  console.log('B');
  yield 2;
  console.log('C');
}
let generator = returnOneThenReturnTwo();
for(let value of generator) {
  if(value) {
    console.log(value);
  } else {
    break;
  }
}