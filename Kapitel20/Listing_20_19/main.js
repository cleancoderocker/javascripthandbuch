'use strict';
var Cylon = require('cylon');
Cylon
  .robot()
  .connection('beaglebone', { adaptor: 'beaglebone' })
  .device('led', { driver: 'led', pin: 'P9_12' })
  .device('button', { driver: 'button', pin: 'P9_14' })
  .on('ready', function(robot) {
    robot.button.on('push', function() {
      robot.led.toggle();
    });
  });
Cylon.start();