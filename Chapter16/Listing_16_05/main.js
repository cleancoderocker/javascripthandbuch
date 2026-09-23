'use strict';
function asyncFunction(callbackFunction) {
  let result;
  setTimeout(
    () => {
      result = Math.floor(Math.random() * 100) + 1;
      if(result < 50) {
        throw new Error(`Random number ${result} less than 50.`);
      }
    }, 
    2000
  );
  return result;
}

try {
  const result = asyncFunction();
} catch(error) {
  console.error(`Error: ${error}`); // This line is not called!
}
