var events = require('events');               // events-Modul einbinden
var emitter = new events.EventEmitter();      // Emitter erstellen
emitter.once(                                 // Event abfangen
  'personAdded',                              // Eventname
  function(firstName, lastName) {             // Callback-Handler
    console.log(firstName + ' ' + lastName);
  }
);
emitter.emit('personAdded', 'Max', 'Mustermann');     // Ausgabe: "Max Mustermann"
emitter.emit('personAdded', 'Moritz', 'Mustermann');  // Wird nicht ausgelöst
