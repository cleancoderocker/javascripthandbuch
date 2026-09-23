'use strict';
function asyncFunction(callbackFunction) {
  let result;
  setTimeout(
    () => {
      // This only happens after two seconds.
      result = Math.floor(Math.random() * 100) + 1;
      if(result >= 50) {
        callbackFunction(
          null,          // null --> no error
          result         // result value
        );
       } else {
         callbackFunction(
          new Error(`random number ${result} less than 50.`), // Error
          undefined                                           // no result value
        );
       }
     }, 
     2000
  );
}

asyncFunction(
  (error, result) => {
    if(error) {
      console.error(error);  // Error handling in the callback
    } else {
      console.log(result);   // Result handling in the callback
    }
  }
);
