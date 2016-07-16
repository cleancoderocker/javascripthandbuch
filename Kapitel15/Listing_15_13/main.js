'use strict';
// Definition von 'ModuleA'
define(
  'ModuleA', // Names des Moduls
  ['ModuleB'], // zu importierende Module
  function (moduleB) { // Funktion, die das Modul definiert
    let x = 5;
    let y = 4711;
    let module = {
      getX: function() {
        return x;
      },
      getY: function() {
        return y;
      },
      print: function() {
        moduleB.printHelloWorld();
        console.log(
          'x: ' +
          this.getX() +
          ', y: ' +
          this.getY()
        )
      }
    }
    return module;
  }
);
// Definition von 'ModuleB'
define(
  'ModuleB', // Names des Moduls
  [], // zu importierende Module
  function () { // Funktion, die das Modul definiert
    let module = {
      printHelloWorld: function() {
        console.log('Hello World');
      }
    }
    return module;
  }
);