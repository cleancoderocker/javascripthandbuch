'use strict';
// Definition von 'ModuleA'
define(
  'ModuleA', // Name des Moduls
  ['ModuleB'], // zu importierende Module
  function (moduleB) { // Funktion, die das Modul definiert
    const x = 5;
    let y = 4711;
    const module = {
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
  'ModuleB', // Name des Moduls
  [], // zu importierende Module
  function () { // Funktion, die das Modul definiert
    const module = {
      printHelloWorld: function() {
        console.log('Hello World');
      }
    }
    return module;
  }
);