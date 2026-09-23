'use strict';
console.log(checkAge(22));          // true
console.log(checkAge("John Doe"));  // Error: Age must be a number
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new Error('Age must be a number.');
  } else if (age < 0) {
    throw new Error('Age must not be negative.');
  }
  return true;  // In case of error, this statement will no longer be executed.
}
