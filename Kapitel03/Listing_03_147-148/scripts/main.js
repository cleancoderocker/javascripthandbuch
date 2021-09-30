'use strict';
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Alter muss eine Zahl sein.');
  } else if (age < 0) {
    throw new RangeError('Alter darf nicht negativ sein.');
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