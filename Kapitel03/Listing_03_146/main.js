'use strict';
try {
  console.log(checkAge(22));                // true
} catch(error) {
  console.log(error);                       // Wird nicht aufgerufen
}
try {
  console.log(checkAge("Max Mustermann"));  // keine Ausgabe
} catch(error) {
  console.log(error);                       // TypeError: Alter muss eine Zahl sein
}
try {
  console.log(checkAge(-22));               // keine Ausgabe
} catch(error) {
  console.log(error);                       // RangeError: Alter darf nicht negativ sein
}
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Alter muss eine Zahl sein.');
  } else if (age < 0) {
    throw new RangeError('Alter darf nicht negativ sein.');
  }
  return true;                            // Im Fehlerfall wird diese Anweisung nicht mehr ausgeführt.
}