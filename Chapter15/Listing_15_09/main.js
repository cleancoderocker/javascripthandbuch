'use strict';
var Module = Module || (function () { 
  const x = 5;
  const y = 4711;
  return {
    getX: function() {
      return x;
    },
    getY: function() {
      return y;
    },
    // Access to own methods
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
