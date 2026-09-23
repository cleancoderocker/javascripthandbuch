'use strict';
function counter(name) {
  let i=0;
  return function() {
    i++;
    console.log(name + ': ' + i);
  }
}
const counter1 = counter('Counter 1'); // Create a counter
counter1();                            // Counter 1: 1
counter1();                            // Counter 1: 2
const counter2 = counter('Counter 2'); // Create a counter
counter2();                            // Counter 2: 1
counter2();                            // Counter 2: 2 
