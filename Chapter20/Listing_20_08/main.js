'use strict';
var ow = new OneWire(A1);
var sensor = require("DS18B20").connect(ow);
setInterval(function() {
  // Output of the measured temperature value
  console.log(sensor.getTemp());
}, 1000);
