'use strict';
console.log(checkAge(22));                // true
console.log(checkAge("Max Mustermann"));  // TypeError: Alter muss eine Zahl sein
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Alter muss eine Zahl sein.');
  } else if (age < 0) {
    throw new RangeError('Alter darf nicht negativ sein.');
  }
  return true;   // Im Fehlerfall wird diese Anweisung nicht mehr ausgeführt.
}