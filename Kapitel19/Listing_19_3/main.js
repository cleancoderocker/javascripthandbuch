'use strict';
var red = true;
var green = true;
var blue = true;
function toggle1() {
  red = !red;
  digitalWrite(LED1, red);
}
function toggle2() {
  green = !green;
  digitalWrite(LED2, green);
}
function toggle3() {
  blue = !blue;
  digitalWrite(LED3, blue);
}
setInterval(toggle1, 400);
setInterval(toggle2, 420);
setInterval(toggle3, 440);