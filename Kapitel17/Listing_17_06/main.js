'use strict';
const events = require('events'); // events-Package einbinden
const emitter = new events.EventEmitter(); // Emitter erstellen
emitter.on( // Event abfangen
  'personAdded', // Event-Name
  (firstName, lastName) => { // Callback-Funktion
  console.log(firstName + ' ' + lastName);
}
);
emitter.emit( // Event auslösen
  'personAdded', // Event-Name
  'Max', // Parameter firstName
  'Mustermann' // Parameter lastName
); // Ausgabe: "Max Mustermann"
emitter.emit( // Event auslösen
  'personAdded', // Event-Name
  'Moritz', // Parameter firstName
  'Mustermann' // Parameter lastName
); // Ausgabe: "Moritz Mustermann"