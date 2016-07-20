'use strict';
var five = require('johnny-five');
var board = new five.Board({
  port: '/dev/cu.usbmodem14131'
});
var LEDPIN = 13;
var OUTPUT = 1;
board.on('ready', function() {
  var value = 0;
  this.pinMode(LEDPIN, OUTPUT);
  this.loop(2000, function() {
    value = value ? 0 : 1;
    this.digitalWrite(LEDPIN, value);
  });
});