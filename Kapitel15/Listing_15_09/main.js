'use strict';
var Module = Module || (function () {
  const x = 5;
  let y = 4711;
  return {
    getX: function() {
      return x;
    },
    getY: function() {
      return y;
    },
// Zugriff auf eigene Methoden
    print: function() {
      console.log(
        'x: ' +
        Module.getX() +
        ', y: ' +
        Module.getY()
      )
    }
  }
})();