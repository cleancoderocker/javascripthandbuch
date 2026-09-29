'use strict';
function init() {
  setTimeout(function() {
    console.log('Hello World');
  }, 5000);
  setTimeout(() => {
    console.log('Hello World');
  }, 5000);
  function printMessage() {
    console.log('Hello World');
  }
  setTimeout(printMessage, 5000);
}
document.addEventListener('DOMContentLoaded', init)
