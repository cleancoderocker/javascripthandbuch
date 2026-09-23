'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const userInput = prompt('Please enter the length of the array');
  const length = parseInt(userInput);
  let array;
  try {
    array = createArray(length);
  } catch (error) {
    console.log(error.name);     // Output: RangeError
    console.log(error.message);  // Invalid array length
  }
  
  function createArray(length) {
    return new Array(length);
  }  
});
