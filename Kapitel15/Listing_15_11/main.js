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
// Innerhalb des Moduls stehen ...
// ... Abhängigkeiten über das entsprechende ...
// ... Argument zur Verfügung.
  const x = 5;
  let y = 4711;
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
// Abhängigkeit wird als Argument übergeben.
})(ModuleB);
ModuleA.print();