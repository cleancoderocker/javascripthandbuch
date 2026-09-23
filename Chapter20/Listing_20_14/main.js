'use strict';
var b = require('bonescript');
b.pinMode('USR0', b.OUTPUT);     // LED 0 on output mode
b.pinMode('USR1', b.OUTPUT);     // LED 1 on output mode
b.pinMode('USR2', b.OUTPUT);     // LED 2 on output mode
b.pinMode('USR3', b.OUTPUT);     // LED 3on output mode
b.digitalWrite('USR0', b.HIGH);  // Switch on LED 0
b.digitalWrite('USR1', b.HIGH);  // Switch on LED 1
b.digitalWrite('USR2', b.HIGH);  // Switch on LED 2
b.digitalWrite('USR3', b.HIGH);  // Switch on LED 3
