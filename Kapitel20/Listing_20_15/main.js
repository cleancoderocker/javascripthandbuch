'use strict';
var b = require('bonescript');
b.pinMode('P8_19', b.INPUT);
b.pinMode('P8_13', b.OUTPUT);
setInterval(check, 100);
function check(){
  b.digitalRead('P8_19', checkButton);
}
function checkButton(x) {
  if(x.value == 1){
    b.digitalWrite('P8_13', b.HIGH);
  }
  else{
    b.digitalWrite('P8_13', b.LOW);
  }
}