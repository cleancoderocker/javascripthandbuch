'use strict';
var five = require('johnny-five'), button, led;
five.Board().on('ready', function() {
  button = new five.Button(7);
  led = new five.Led(13);
  button.on('hit', function() {
    led.on();
  }).on('release', function() {
    led.off();
  });
});