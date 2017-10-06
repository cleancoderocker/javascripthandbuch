'use strict';
/* Diese Funktion addiert zwei positive Zahlen
 und liefert das Ergebnis zurück. */
function add(x, y) {
  let result = 0; // Variable für das Ergebnis
  // Wenn eine der beiden Zahlen kleiner 0 ist ...
  if(x < 0 || y < 0) {
    // ... wird ein Fehler zurückgegeben ...
    throw new Error('Zahlen müssen größer gleich 0 sein.');
  } else {
    // ... andernfalls werden die beiden Zahlen addiert ...
    result = x + y;
  }
  // ... und das Ergebnis zurückgegeben.
  return result;
}