'use strict';
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log('Vor der Schleife.');
let i = -1;                                   // Zählervariable initialisieren
while(i < numbers.length) {                   // Iteriere über das Zahlenarray.
  i++;                                        // Erhöhe die Zählervariable.
  const number = numbers[i];                    // Jeweilige Zahl zuweisen.
  if (number % 2 === 1) {                     // Wenn eine Zahl ungerade ist ...
    console.log('Ungerade Zahl gefunden.');   // ... gebe Meldung aus ...
    continue;                                 // ... und breche die Schleifeniteration
                                              // ab.
  }                                           // Ansonsten ...
  console.log(number);                        // ... gebe die Zahl aus.
}