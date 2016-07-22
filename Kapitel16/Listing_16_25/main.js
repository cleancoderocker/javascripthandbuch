'use strict';
function* counter() {
  let counter = 0;
  while(true) {
    counter++;
    let restart = yield counter;
    if(restart === true) {
      counter = 0;
    }
  }
}
let counterInstance = counter();
console.log(counterInstance.next());      // {done: false, value: 1}
console.log(counterInstance.next());      // {done: false, value: 2}
console.log(counterInstance.next());      // {done: false, value: 3}
console.log(counterInstance.next());      // {done: false, value: 4}
console.log(counterInstance.next());      // {done: false, value: 5}
console.log(counterInstance.next(true));  // {done: false, value: 1}
console.log(counterInstance.next());      // {done: false, value: 2}
console.log(counterInstance.next());      // {done: false, value: 3}
console.log(counterInstance.next());      // {done: false, value: 4}
console.log(counterInstance.next());      // {done: false, value: 5}