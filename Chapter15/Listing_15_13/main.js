'use strict';
// Definition of 'ModuleA
define(
  'ModuleA',           // Name of the module
  ['ModuleB'],         // Modules to be imported
  function (moduleB) { // Function that defines the module
    const x = 5;
    const y = 4711;
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
// Definition of 'ModuleB'
define(
  'ModuleB', // Name of the module
  [],                  // Modules to be imported
  function () {        // Function that defines the module
    const module = {
      printHelloWorld: function() {
        console.log('Hello World');
      }
    }
    return module;
  }
);
