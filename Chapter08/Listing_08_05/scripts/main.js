'use strict';
function init() {
  window.setTimeout(function() {
    console.log('Hello World');
  }, 5000);
  
  window.setTimeout(() => {
    console.log('Hello World');
  }, 5000);
  function printMessage() {
    console.log('Hello World');
  }
  window.setTimeout(printMessage, 5000);  
}
document.addEventListener('DOMContentLoaded', init)
