'use strict';
function asyncFunction(callbackFunction) {
  let result;
  setTimeout(
    () => {
      // Das hier passiert erst nach zwei Sekunden.
      result = Math.floor(Math.random() * 100) + 1;
      if (result >= 50) {
        callbackFunction(
          null,          // null --> kein Fehler
          result         // Ergebniswert
        );
      } else {
        callbackFunction(
          new Error(`Zufallszahl ${result} kleiner als 50.`), // Fehler
          undefined                                           // kein Ergebniswert
        );
      }
    },
    2000
  );
}
asyncFunction(
  (error, result) => {
    if (error) {
      console.error(error); // Fehlerbehandlung im Callback
    } else {
      console.log(result); // Ergebnisbehandlung im Callback
    }
  }
);