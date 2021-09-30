'use strict';
const events = require('events'); // events-Package einbinden
const emitter = new events.EventEmitter(); // Emitter erstellen
emitter.on( // Event abfangen
  'personAdded', // Event-Name
  (firstName, lastName) => { // Callback-Funktion
  console.log('Vorname: ' + firstName);
});
emitter.on( // Event abfangen
  'personAdded', // Event-Name
  (firstName, lastName) => { // Callback-Funktion
  console.log('Nachname: ' + lastName);
});
emitter.emit( // Event auslösen
  'personAdded', // Event-Name
  'Max', // Parameter firstName
  'Mustermann' // Parameter lastName
);