'use strict';
try {
  console.log(checkAge(22));         // true
} catch(error) {
  console.log(error);                // will not be called
}
try {
  console.log(checkAge("John Doe")); // no output
} catch(error) {
  console.log(error);                // TypeError: Age must be a number
}
try {
  console.log(checkAge(-22));        // no output
} catch(error) {
  console.log(error);                // RangeError: Age must not be negative
}

function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Age must be a number.');
  } else if (age < 0) {
    throw new RangeError('Age must not be negative.');
  }
  return true;  // In case of error, this statement will no longer be executed.
}
