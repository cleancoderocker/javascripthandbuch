'use strict';
const events = require('events'); // events-Package einbinden
const emitter = new events.EventEmitter(); // Emitter erstellen
emitter.once( // Event abfangen
  'personAdded', // Event-Name
  (firstName, lastName) => { // Callback-Funktion
    console.log(`${firstName} ${lastName}`);
  }
);
emitter.emit('personAdded', 'Max', 'Mustermann'); // Ausgabe: "Max Mustermann"
emitter.emit('personAdded', 'Moritz', 'Mustermann'); // Event-Listener wird nicht ausgelöst