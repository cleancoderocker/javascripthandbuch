'use strict';
console.log(checkAge(22));          // true
console.log(checkAge("John Doe"));  // TypeError: Age must be a number
console.log(checkAge(-22));         // will not be called
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Age must be a number.');
  } else if (age < 0) {
    throw new RangeError('Age must not be negative.');
  }
  return true;  // In case of error, this statement will no longer be executed.
}
