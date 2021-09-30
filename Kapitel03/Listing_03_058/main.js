'use strict';
const age = prompt('Geben Sie bitte Ihr Alter ein.');
let isAtLeast18 = false;
if(age >= 18) {
  isAtLeast18 = true;
}
console.log(isAtLeast18);