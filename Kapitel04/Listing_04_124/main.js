'use strict';
let button = {
  handler : null,
// Funktion, die einen Callback-Handler erwartet
  onClick : function(handler) {
    this.handler = handler;
  },
  click : function() {
    this.handler();
  }
};
let handler = {
  log: function() {
    console.log("Button geklickt.");
  },
// Objektmethode, die weiter unten als Callback-Handler registriert wird
  handle: function() {
    this.log();
  }
}
// Registrieren des Callback-Handlers
let boundFunction = handler.handle.bind(handler);
button.onClick(boundFunction);
// Implizites Aktivieren des Callback-Handlers
button.click();