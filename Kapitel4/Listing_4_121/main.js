'use strict';
function sayHello() {
  console.log('Hallo');
  return function() {
    console.log('Welt');
    return function() {
      console.log('Mein Name ist Max Mustermann.');
    }
  }
}
console.log(sayHello());      // Aufruf der »äußeren« Funktion
console.log(sayHello()());    // Aufruf der »äußeren« und der »mittleren« Funktion
console.log(sayHello()()());  // Aufruf aller Funktionen