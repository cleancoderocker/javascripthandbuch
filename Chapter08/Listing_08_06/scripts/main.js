'use strict';
// Option 1: anonymous Function
const intervalId1 = setInterval(function() {
  console.log('Hello World');
}, 5000);

// Option 2: Arrow Function
const intervalId2 = setInterval(() => {
  console.log('Hello World');
}, 5000);

// Option 3: Functionname
function printMessage() {
  console.log('Hello World');
}
const intervalId3 = setInterval(printMessage, 5000);

// Stop all intervals after 20 seconds
setTimeout(() => {
  clearInterval(intervalId1);
  clearInterval(intervalId2);
  clearInterval(intervalId3);
  console.log('All intervals stopped');
}, 20000);
