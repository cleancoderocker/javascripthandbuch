'use strict';
const events = require('events');                     // Include events package
const emitter = new events.EventEmitter();            // Create emitter
emitter.once(                                         // Intercept event
  'personAdded',                                      // Event name
  (firstName, lastName) => {                          // Callback function
    console.log(firstName + ' ' + lastName);
  }
);
emitter.emit('personAdded', 'John', 'Doe');           // Output: "John Doe"
emitter.emit('personAdded', 'James', 'Doe');          // Event listener is not...
                                                      // ... triggered.
