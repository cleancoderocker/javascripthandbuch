'use strict';
function* counter() {
  let counter = 0;
  while(true) {
    counter++;
    yield counter;
  }
}

const counter1 = counter();
console.log(counter1.next()); // {done: false, value: 1}
console.log(counter1.next()); // {done: false, value: 2}
console.log(counter1.next()); // {done: false, value: 3}
console.log(counter1.next()); // {done: false, value: 4}
console.log(counter1.next()); // {done: false, value: 5}
// usw.