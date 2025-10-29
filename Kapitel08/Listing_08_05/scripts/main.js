'use strict';
function init() {
  setTimeout(function() {
    console.log('Hallo Welt');
  }, 5000);
  setTimeout(() => {
    console.log('Hallo Welt');
  }, 5000);
  function printMessage() {
    console.log('Hallo Welt');
  }
  setTimeout(printMessage, 5000);
}
document.addEventListener('DOMContentLoaded', init)
