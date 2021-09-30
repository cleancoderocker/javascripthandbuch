'use strict';
const testResultElement = document.getElementById('testResult');
const testResult = 0;                   // Testergebnis, würde normalerweise berechnet
let icon = null;                        // Variable, die den Bildnamen enthalten wird
if(testResult === 0) {                  // Prüfe das Testergebnis. Hat dieses den Wert 0,
  icon = 'pass.png';                    // wird der Bildname "pass.png" verwendet.
} else if(testResult === 1) {           // Hat das Testergebnis den Wert 1,
  icon = 'info.png';                    // wird der Bildname "info.png" verwendet.
} else if(testResult === 2) {           // Hat das Testergebnis den Wert 2,
  icon = 'warning.png';                 // wird der Bildname "warning.png" verwendet.
} else if(testResult === 3) {           // Hat das Testergebnis den Wert 3,
  icon = 'error.png';                   // wird der Bildname "error.png" verwendet.
} else {                                // Für alle anderen Werte
  icon = 'unknown.png';                 // wird der Bildname "unknown.png" verwendet.
}
testResultElement.src = 'img/' + icon;  // Setzen des jeweiligen Bildes