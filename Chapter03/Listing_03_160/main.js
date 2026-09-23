'use strict';
console.log(checkAge(22));   // true
console.log(checkAge(-22));  // Error: Age must not be negative
function checkAge(age) {
  if (age < 0) {
    throw new Error('Age must not be negative.');
  } else {
    return true;
  }
}
