'use strict';
var red = true;
var green = true;
var blue = true;
function toggleRed() {
  red = !red;
  LED1.write(red);
}
function toggleGreen() {
  green = !green;
  LED2.write(green);
}
function toggleBlue() {
  blue = !blue;
  LED3.write(blue);
}
setInterval(toggleRed, 400);
setInterval(toggleGreen, 420);
setInterval(toggleBlue, 440);