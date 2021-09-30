'use strict';
function asyncFunction(callbackFunction) {
  let result;
  setTimeout(
    () => {
      // Das hier passiert erst nach zwei Sekunden.
      result = Math.floor(Math.random() * 100) + 1; // Zufallszahl
      callbackFunction(result);
    },
    2000
  );
}
asyncFunction((result) => {
  console.log(result);
});
