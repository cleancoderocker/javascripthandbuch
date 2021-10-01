'use strict';
function asyncFunction() {
  const promise = new Promise(
    function(resolve, reject) {
      setTimeout(
        () => {
          const result = Math.floor(Math.random() * 100) + 1; // Zufallszahl
          if(result >= 50) {
            resolve(result); // Ergebnis
          } else {
            reject(`Zufallszahl ${result} kleiner als 50.`); // Fehler
          }
        },
        2000);
    }
  );
  return promise;
}
asyncFunction()
  .then((result) => {
    // Inhalt von asyncFunction2
  })
  .then((result) => {
    // Inhalt von asyncFunction3
  })
  .then((result) => {
    // Inhalt von asyncFunction4
  })
  .then((result) => {
    // Inhalt von asyncFunction5
  });