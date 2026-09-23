'use strict';
var tessel = require('tessel');
var greenLED = tessel.led[0].write(0);
var blueLED = tessel.led[1].write(0);
var redLED = tessel.led[2].write(0);
var amberLED = tessel.led[3].write(0);
function toggleGreen() {
  greenLED.toggle();
}
function toggleBlue() {
  blueLED.toggle();
}
function toggleRed() {
  redLED.toggle();
}
function toggleAmber() {
  amberLED.toggle();
}
setInterval(toggleRed, 400);
setInterval(toggleGreen, 420);
setInterval(toggleBlue, 440);
setInterval(toggleAmber, 460);