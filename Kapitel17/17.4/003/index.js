var events = require('events');               // events-Modul einbinden
var emitter = new events.EventEmitter();      // Emitter erstellen
emitter.on(                                   // Event abfangen
  'personAdded',                              // Eventname
  function(firstName, lastName) {             // Callback-Handler
    console.log('Vorname: ' + firstName);
  }
);
emitter.on(                                   // Event abfangen
  'personAdded',                              // Eventname
  function(firstName, lastName) {             // Callback-Handler
    console.log('Nachname: ' + lastName);
  }
);
emitter.emit(                                 // Event auslösen
  'personAdded',                              // Eventname
  'Max',                                      // Parameter firstName
  'Mustermann'                                // Parameter lastName
);