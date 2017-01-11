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
sayHello();      // Aufruf der »äußeren« Funktion
sayHello()();    // Aufruf der »äußeren« und der »mittleren« Funktion
sayHello()()();  // Aufruf aller Funktionen