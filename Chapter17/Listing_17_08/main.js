'use strict';
const events = require('events');             // Include events package
const emitter = new events.EventEmitter();    // Create emitter
emitter.on(                                   // Intercept event
  'personAdded',                              // Event name
  (firstName, lastName) => {                  // Callback function
    console.log('First name: ' + firstName);
  }
);
emitter.on(                                   // Intercept event
  'personAdded',                              // Event name
  (firstName, lastName) => {                  // Callback function
    console.log('Last name: ' + lastName);
  }
);
emitter.emit(                                 // Trigger event
  'personAdded',                              // Event name
  'John',                                     // Parameter firstName
  'Doe'                                       // Parameter lastName
);
