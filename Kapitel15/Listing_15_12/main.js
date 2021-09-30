'use strict';
// Datei 1
var ModuleA = ModuleA || (function (moduleA) {
// Eigenschaften und Funktionen hinzufügen
  const x = 5;
  let y = 4711;
  moduleA.getX = function() {
    return x;
  }
  moduleA.getY = function() {
    return y;
  }
// Modul selbst als Rückgabewert
  return moduleA;
// Loose Augmentation
})(ModuleA || {});

// Datei 2
var ModuleA = (function (moduleA) {
// Eigenschaften und Funktionen hinzufügen
  moduleA.print = function() {
    console.log(
      'x: ' +
      moduleA.getX() +
      ', y: ' +
      moduleA.getY()
    )
  }
// Modul selbst als Rückgabewert
  return moduleA;
// Tight Augmentation
})(ModuleA);

// Datei 3
ModuleA.print();