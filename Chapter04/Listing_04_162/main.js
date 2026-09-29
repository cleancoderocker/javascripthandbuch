'use strict';
function createAddFunction() {
  return function(x, y) {
    return x + y;
  }
}
const addFunction1 = createAddFunction();
const addFunction2 = createAddFunction();
console.log(addFunction1(22, 55)); // 77
console.log(addFunction2(33, 66)); // 99