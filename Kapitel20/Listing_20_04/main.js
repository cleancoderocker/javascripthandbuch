'use strict';
var red = true;
setWatch(function() {
  if (digitalRead(BTN1) === 1) {
    digitalWrite(LED1, red);
    red = !red;
  }
}, BTN1, true);