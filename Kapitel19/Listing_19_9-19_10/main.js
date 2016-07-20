'use strict';
var tessel = require('tessel');
var red = true;
var green = true;
var blue = true;
var amber = true;
function toggleGreen() {
  green = !green;
  tessel.led[0].write(green);
}
function toggleBlue() {
  blue = !blue;
  tessel.led[1].write(blue);
}
function toggleRed() {
  red = !red;
  tessel.led[2].write(red);
}
function toggleAmber() {
  amber = !amber;
  tessel.led[3].write(amber);
}
setInterval(toggleRed, 400);
setInterval(toggleGreen, 420);
setInterval(toggleBlue, 440);
setInterval(toggleAmber, 460);