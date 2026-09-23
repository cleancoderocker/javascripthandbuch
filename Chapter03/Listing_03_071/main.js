'use strict';
const age = prompt('Please enter your age.');
let isAtLeast18;
if(age >= 18) {
  isAtLeast18 = true;
} else {
  isAtLeast18 = false;
}
console.log(isAtLeast18);
