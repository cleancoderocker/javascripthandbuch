'use strict';
console.log(checkAge(22));  // true
console.log(checkAge(-22)); // Error: Alter darf nicht negativ sein
function checkAge(age) {
  if (age < 0) {
    throw new Error('Alter darf nicht negativ sein.');
  }
  return true;              // Im Fehlerfall wird diese Anweisung nicht mehr ausgeführt.
}
