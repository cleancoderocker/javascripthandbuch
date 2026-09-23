'use strict';
var tessel = require('tessel');
tessel.button.on('press', function(time, type) {
  tessel.led[0].write(1);
});
tessel.button.on('release', function(time, type) {
  ctessel.led[0].write(0);
});