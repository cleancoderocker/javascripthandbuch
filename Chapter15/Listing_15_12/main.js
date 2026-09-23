'use strict';
// File 1
var ModuleA = ModuleA || (function (moduleA) { 
  // Add properties and functions
  const x = 5;
  const y = 4711;
  moduleA.getX = function() {
    return x;
  }
  moduleA.getY = function() {
    return y;
  }
  // Module itself as return value
  return moduleA;
  // Loose augmentation
})(ModuleA || {});

// File 2
var ModuleA = (function (moduleA) { 
  // Add properties and functions
  moduleA.print = function() {
    console.log(
      'x: ' + 
      moduleA.getX() + 
      ', y: ' + 
      moduleA.getY()
    )
  }
  // Module itself as return value
  return moduleA;
  // Tight augmentation
})(ModuleA);

// File 3
ModuleA.print(); 
