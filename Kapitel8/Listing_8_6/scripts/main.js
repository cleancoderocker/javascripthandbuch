'use strict';
function init() {
  window.setInterval(function() {
    console.log('Hallo Welt');
  }, 5000);
  windowsetInterval(() => {
    console.log('Hallo Welt');
  }, 5000);
  function printMessage() {
    console.log('Hallo Welt');
  }
  window.setInterval(printMessage, 5000);
}
document.addEventListener('DOMContentLoaded', init)
