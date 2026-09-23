'use strict';
function* counter() {
  const counter = 0;
  while(true) {
    counter++;
    const restart = yield counter;
    if(restart === true) {
      counter = 0;
    }
  }
}

const counter1 = counter();
console.log(counter1.next());       // {done: false, value: 1}
console.log(counter1.next());       // {done: false, value: 2}
console.log(counter1.next());       // {done: false, value: 3}
console.log(counter1.next());       // {done: false, value: 4}
console.log(counter1.next());       // {done: false, value: 5}
console.log(counter1.next(true));   // {done: false, value: 1}
console.log(counter1.next());       // {done: false, value: 2}
console.log(counter1.next());       // {done: false, value: 3}
console.log(counter1.next());       // {done: false, value: 4}
console.log(counter1.next());       // {done: false, value: 5}
