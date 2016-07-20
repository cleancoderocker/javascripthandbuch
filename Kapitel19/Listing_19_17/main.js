'use strict';
var five = require('johnny-five');
var board = new five.Board({
  port: '/dev/cu.usbmodem14131'
});
board.on('ready', function() {
  var led = new five.Led(13);
  led.blink(2000);
});