'use strict';
var Module = Module || (function () {
// private Variable
    const x = 5;
// private Variable
    let y = 4711;
// öffentliche API
    return {
// öffentliche Funktion
      getX: function() {
        return x;
      },
// öffentliche Funktion
      getY: function() {
        return y;
      }
    }
  })();
console.log(Module.getX()); // 5
console.log(Module.getY()); // 4711
Module.x = 888;
Module.y = 888;
console.log(Module.getX()); // 5
console.log(Module.getY()); // 4711