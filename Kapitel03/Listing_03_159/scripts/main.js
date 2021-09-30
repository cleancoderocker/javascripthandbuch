'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const userInput = prompt('Bitte die Länge des Arrays eingeben');
  const length = parseInt(userInput);
  let array;
  try {
    array = createArray(length);
  } catch (error) {
    console.log(error.name); // Ausgabe: RangeError
    console.log(error.message); // Invalid array length
  }
  function createArray(length) {
    return new Array(length);
  }
});
