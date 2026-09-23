'use strict';
var Module = Module || (function () { 
  // private variable
  const x = 5;
  // private variable
  const y = 4711;
  // public API
  return {
    // public function 
    getX: function() {
      return x;
    },
    // public function
    getY: function() {
      return y;
    }
  } 
})();
console.log(Module.getX());  // 5
console.log(Module.getY());  // 4711
Module.x = 888;
Module.y = 888;
console.log(Module.getX());  // 5
console.log(Module.getY());  // 4711
