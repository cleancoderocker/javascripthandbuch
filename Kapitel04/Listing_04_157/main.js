'use strict';
// Definition der Funktion, die als Argument eine andere Funktion erwartet
function function1(f) {
  console.log('Funktion 1 Start'); // Aufruf der übergebenen Funktion
  f();
  console.log('Funktion 1 Ende');
}
function function2() {
  console.log('Funktion 2 Start');
  console.log('Funktion 2 Ende');
}
// Aufruf mit einer Funktion über deren Namen
function1(function2);
// function1(function2()); // Das funktioniert nicht.
// Aufruf mit einer anonymen Funktion als Argument
function1(function() {
  console.log('Anonyme Funktion Start');
  console.log('Anonyme Funktion Ende');
});