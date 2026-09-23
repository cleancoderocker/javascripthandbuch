'use strict';
/* This function adds two positive numbers 
and returns the result. */
function add(x, y) {
  let result = 0;         // Variable for the result
  // If one of the two numbers is less than 0 ...
  if(x < 0 || y < 0) {
    // ... an error is returned ...
    throw new Error('Numbers must be greater than or equal to 0.');
  } else {
    // ... otherwise the two numbers are added ...
    result = x + y;
  }
  // ... and the result is returned.
  return result;
}
