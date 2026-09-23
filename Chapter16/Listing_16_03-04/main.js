'use strict';
function asyncFunction(callbackFunction) {
  let result;
  setTimeout(
    () => {
      // This only happens after two seconds.
      result = Math.floor(Math.random() * 100) + 1;  // Random number
    }, 
    2000
  );
  return result;
}

const result = asyncFunction();
console.log(result); // undefined
