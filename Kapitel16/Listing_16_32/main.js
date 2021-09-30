'use strict';
function asyncFunction(callbackFunction) {
  let result;
  setTimeout(
    () => {
      // Das hier passiert erst nach zwei Sekunden.
      result = Math.floor(Math.random() * 100) + 1; // Zufallszahl
      if(result < 50) {
        throw new Error(`Zufallszahl ${result} kleiner als 50.`);
      }
    },
    2000
  );
  return result;
}
try {
  const result = asyncFunction();
} catch(error) {
  console.error(`Fehler: ${error}`); // Diese Stelle wird nicht aufgerufen!
}