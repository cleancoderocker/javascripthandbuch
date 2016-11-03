'use strict';
function init() {
  window.setTimeout(function() {
    console.log('Hallo Welt');
  }, 5000);
  window.setTimeout(() => {
    console.log('Hallo Welt');
  }, 5000);
  function printMessage() {
    console.log('Hallo Welt');
  }
  window.setTimeout(printMessage, 5000);
}
document.addEventListener('DOMContentLoaded', init)
