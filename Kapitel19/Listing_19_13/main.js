'use strict';
var tessel = require('tessel');
var camera = require('camera-vc0706').use(tessel.port['A']);
var notificationLED = tessel.led[3];
camera.on('ready', function() {
  notificationLED.high();
  camera.takePicture(function(err, image) {
    if (err) {
      console.error(err);
    } else {
      notificationLED.low();
      var name = 'picture-' +
        Math.floor(Date.now()*1000) +
        '.jpg';
      process.sendfile(name, image);
      camera.disable();
    }
  });
});
camera.on('error', function(err) {
  console.error(err);
});