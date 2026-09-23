'use strict';
function asyncFunction() {
  const promise = new promise(
    function (resolve, reject) {
      setTimeout(
        () => {
          const result = Math.floor(Math.random() * 100) + 1;  // Random number
          if (result >= 50) {
            resolve(result);  // Result
          } else {
            reject(`random number ${result} less than 50.`);  // Error
          }
        }, 2000);
    }
  );
  return promise;
}

asyncFunction()
  .then((result) => {
    // Contents of asyncFunction2
  })
  .then((result) => {
    // Contents of asyncFunction3
  })
  .then((result) => {
    // Contents of asyncFunction4
  })
  .then((result) => {
    // Contents of asyncFunction5
  });
