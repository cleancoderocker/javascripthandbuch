'use strict';
function asyncFunction(callbackFunction) {
// hier weiterer Code
  console.log('Vor Callback');
  callbackFunction();
  console.log('Nach Callback');
// hier weiterer Code
}
function callbackFunction() {
  console.log('Aufruf Callback');
}
asyncFunction(callbackFunction);
// Ausgabe:
// "Vor Callback"
// "Aufruf Callback"
// "Nach Callback"