'use strict';
function init() {
  window.setInterval(function() {
    console.log('Hello World');
  }, 5000);
  window.setInterval(() => {
    console.log('Hello World');
  }, 5000);
  function printMessage() {
    console.log('Hello World');
  }
  window.setInterval(printMessage, 5000);
  
}
document.addEventListener('DOMContentLoaded', init)
