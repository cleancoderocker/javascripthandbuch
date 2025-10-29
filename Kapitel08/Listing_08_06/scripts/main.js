'use strict';
// Variante 1: anonyme Funktion
const intervalId1 = setInterval(function() {
  console.log('Hallo Welt');
}, 5000);

// Variante 2: Arrow Function
const intervalId2 = setInterval(() => {
  console.log('Hallo Welt');
}, 5000);

// Variante 3: Funktionsname
function printMessage() {
  console.log('Hallo Welt');
}
const intervalId3 = setInterval(printMessage, 5000);

// Alle Intervalle nach 20 Sekunden stoppen
setTimeout(() => {
  clearInterval(intervalId1);
  clearInterval(intervalId2);
  clearInterval(intervalId3);
  console.log('Alle Intervalle gestoppt');
}, 20000);
