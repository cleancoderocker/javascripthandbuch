'use strict';
const age = prompt('Geben Sie bitte Ihr Alter ein.');
let isAtLeast18;
if(age >= 18) {
  isAtLeast18 = true;
} else {
  isAtLeast18 = false;
}
console.log(isAtLeast18);