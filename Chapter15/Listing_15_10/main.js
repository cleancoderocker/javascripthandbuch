'use strict';
var Module = Module || (function () { 
  const x = 5;
  const y = 4711;
  function getX() {
    return x;
  }
  function getY() {
    return y;
  }
  function print() {
    console.log(
      'x: ' + 
      getX() + 
      ', y: ' + 
      getY()
    )
  }
  // Return object contains only references.
  return {
    getX: getX,
    getY: getY,
    print: print
  } 
})();
Module.print();
