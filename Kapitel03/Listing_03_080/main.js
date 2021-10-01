'use strict';
const testResultElement = document.getElementById('testResult');
const testResult = 0; // Testergebnis, würde normalerweise berechnet
let icon = null; // Variable, die den Bildnamen enthalten wird
switch(testResult) { // Prüfe das Testergebnis
  case 0: // Hat dieses den Wert 0
  case 1: // oder den Wert 1,
    icon = 'pass.png'; // wird der Bildname "pass.png" verwendet.
    break; // Abbruch
  case 2: // Hat das Testergebnis den Wert 2
  case 3: // oder den Wert 3,
    icon = 'error.png'; // wird der Bildname "error.png" verwendet.
    break; // Abbruch
  default: // Für alle anderen Werte
    icon = 'unknown.png'; // wird der Bildname "unknown.png" verwendet.
}
testResultElement.src = 'img/' + icon;