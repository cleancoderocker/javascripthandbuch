'use strict';
const events = require('events');             // Include events package
const emitter = new events.EventEmitter();    // Create emitter
emitter.on(                                   // Intercept event
  'personAdded',                              // Event name
  (firstName, lastName) => {                  // Callback function
    console.log(firstName + ' ' + lastName);
  }
);
emitter.emit(                                 // Trigger event
  'personAdded',                              // Event name
  'John',                                     // Parameter firstName
  'Doe'                                       // Parameter lastName
);                                            // Output: "John Doe"
emitter.emit(                                 // Trigger event
  'personAdded',                              // Event name
  'James',                                    // Parameter firstName
  'Doe'                                       // Parameter lastName
);                                            // Output: "James Doe"
