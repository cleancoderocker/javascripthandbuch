'use strict';
function* returnOneThenReturnTwo() {
  console.log('A');
  yield 1;
  console.log('B');
  yield 2;
  console.log('C');
}

const generator = returnOneThenReturnTwo();    
// Calling the generator function creates a generator.

let result = generator.next();    // Output: "A"
console.log(result);              // Output: {done: false, value: 1}
result = generator.next();        // Output: "B"
console.log(result);              // Output: {done: false, value: 2}
result = generator.next();        // Output: "C"
console.log(result);              // Output: {done: true, value: undefined}

const generator2 = returnOneThenReturnTwo();    // a second generator
let result2 = generator2.next();  // Output: "A"
console.log(result2);             // Output: {done: false, value: 1}
result2 = generator2.next();      // Output: "B"
console.log(result2);             // Output: {done: false, value: 2}
result2 = generator2.next();      // Output: "C"
console.log(result2);             // Output: {done: true, value: undefined}
