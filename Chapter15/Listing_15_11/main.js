'use strict';
var ModuleB = ModuleB || (function () { 
  function printHelloWorld() {
    console.log('Hello World');
  }
  return {
    printHelloWorld: printHelloWorld
  } 
})();

var ModuleA = ModuleA || (function (moduleB) { 
  // Within the module, dependencies ...
  // ... are available via the ...
  // ... corresponding argument.
  const x = 5;
  const y = 4711;
  function getX() {
    return x;
  }
  function getY() {
    return y;
  }
  function print() {
    moduleB.printHelloWorld();
    console.log(
      'x: ' + 
      getX() + 
      ', y: ' + 
      getY()
    )
  }
  return {
    getX: getX,
    getY: getY,
    print: print
  } 
  // Dependency is passed as an argument.
})(ModuleB);
ModuleA.print();
