'use strict';
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log('Vor der Schleife.');
for (let i = 0; i < numbers.length; i++) { // Iteriere über ...
  const number = numbers[i]; // ... das Zahlenarray.
  if (number % 2 === 1) { // Wenn eine Zahl ungerade ist ...
    console.log('Ungerade Zahl gefunden.'); // ... gebe Meldung aus ...
    continue; // ... und breche die Schleifeniteration ab.
  } 
  // Ansonsten ...
  console.log(number); // ... gebe die Zahl aus.
}
console.log('Nach der Schleife.');
// Ausgabe:
// Vor der Schleife.
// 2
// 4
// 56
// 22
// Ungerade Zahl gefunden.
// 2
// 54
// 88
// Ungerade Zahl gefunden.
//   Nach der Schleife.