'use strict';
function asyncFunction(callbackFunction) {
  let result;
  setTimeout(
    () => {
      // Das hier passiert erst nach zwei Sekunden.
      result = Math.floor(Math.random() * 100) + 1; // Zufallszahl
    },
    2000
  );
  return result;
}
const result = asyncFunction();
console.log(result); // undefined
