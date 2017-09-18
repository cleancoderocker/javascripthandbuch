'use strict';
var Cylon = require('cylon');
Cylon
  .robot()
  .connection('arduino', { adaptor: 'firmata', port: '/dev/cu.usbmodem14131' })
  .device('led', { driver: 'led', pin: 13 })
  .device('button', { driver: 'button', pin: 2 })
  .on('ready', function(robot) {
    robot.button.on('push', function() {
      robot.led.toggle();
    });
  });
Cylon.start();