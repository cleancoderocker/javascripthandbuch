var events = require('events');               // events-Modul einbinden
var emitter = new events.EventEmitter();      // Emitter erstellen
emitter.on(                                   // Event abfangen
  'personAdded',                              // Eventname
  function(firstName, lastName) {             // Callback-Handler
    console.log(firstName + ' ' + lastName);
  }
);
emitter.emit(                                 // Event auslösen
  'personAdded',                              // Eventname
  'Max',                                      // Parameter firstName
  'Mustermann'                                // Parameter lastName
);                                            // Ausgabe: "Max Mustermann"
emitter.emit(                                 // Event auslösen
  'personAdded',                              // Eventname
  'Moritz',                                   // Parameter firstName
  'Mustermann'                                // Parameter lastName
);                                            // Ausgabe: "Moritz Mustermann"