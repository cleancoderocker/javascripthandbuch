'use strict';
var b = require('bonescript');
b.pinMode('USR0', b.OUTPUT); // LED 0 auf Output-Modus
b.pinMode('USR1', b.OUTPUT); // LED 1 auf Output-Modus
b.pinMode('USR2', b.OUTPUT); // LED 2 auf Output-Modus
b.pinMode('USR3', b.OUTPUT); // LED 3 auf Output-Modus
b.digitalWrite('USR0', b.HIGH); // LED 0 anschalten
b.digitalWrite('USR1', b.HIGH); // LED 1 anschalten
b.digitalWrite('USR2', b.HIGH); // LED 2 anschalten
b.digitalWrite('USR3', b.HIGH); // LED 3 anschalten