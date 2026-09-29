'use strict';
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Age must be a number.');
  } else if (age < 0) {
    throw new RangeError('Age must not be negative.');
  }
  return true;
}

function enter() {
  const age = document.getElementById('age').value;
  try {
    checkAge(age);
  } catch (error) {
    document.getElementById('message').textContent = error.message;
    return;
  }
}
