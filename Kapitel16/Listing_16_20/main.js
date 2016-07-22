'use strict';
function* returnOneThenReturnTwo() {
  console.log('A');
  yield 1;              // Generator hält hier an und liefert den Wert 1.
  console.log('B');     // Beim nächsten Aufruf wird der Generator ab hier weiter ausgeführt
  yield 2;              // bis zu dieser Zeile, an der der Generator wieder anhält und diesmal den Wert 2 zurückgibt.
    console.log('C');
}