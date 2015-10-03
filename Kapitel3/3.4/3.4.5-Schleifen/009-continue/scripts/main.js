(function () {
  var numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
  console.log('Vor der Schleife.');
  for (var i = 0; i < numbers.length; i++) {  // Iteriere über ...
    var number = numbers[i];                  // ...  das Zahlenarray.
    if (number % 2 === 1) {                   // Wenn eine Zahl ungerade ist ...
      console.log('Ungerade Zahl gefunden.'); // ... gebe Meldung aus ...
      continue;                               // ... und breche die Schleifeniteration ab.
    }                                         // Ansonsten ...
    console.log(number);                      // ... gebe die Zahl aus.
  }
  console.log('Nach der Schleife.');
})();

/*
// Dieser Code produziert eine Endlosschleife
(function () {
  var numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
  console.log('Vor der Schleife.');
  var i = 0;                                  // Zählervariable initialisieren.
  while(i < numbers.length) {                 // Iteriere über ...
    var number = numbers[i];                  // ...  das Zahlenarray.
    if (number % 2 === 1) {                   // Wenn eine Zahl ungerade ist ...
      console.log('Ungerade Zahl gefunden.'); // ... gebe Meldung aus ...
      continue;                               // ... und breche die Schleife ab.
    }                                         // Ansonsten ...
    console.log(number);                      // ... gebe die Zahl aus und ...
    i++;                                      // ... erhöhe die Zählervariable.
  }
  console.log('Nach der Schleife.');
})();
*/

(function () {
  var numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
  console.log('Vor der Schleife.');
  var i = -1;                                 // Zählervariable initialisieren.
  while(i < numbers.length) {                 // Iteriere über das Zahlenarray.
    i++;                                      // Erhöhe die Zählervariable.
    var number = numbers[i];                  // Jeweilige Zahl zuweisen.
    if (number % 2 === 1) {                   // Wenn eine Zahl ungerade ist ...
      console.log('Ungerade Zahl gefunden.'); // ... gebe Meldung aus ...
      continue;                               // ... und breche die Schleife ab.
    }                                         // Ansonsten ...
    console.log(number);                      // ... gebe die Zahl aus und ...
  }
})();