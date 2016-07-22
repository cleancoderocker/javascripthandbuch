'use strict';
let item = Object.create(Object.prototype, {
  name: {
    set: function(newName) {
      if (typeof newName === 'string') {
        console.log('Neuen Namen setzen');
        this._name = newName;
      } else {
        throw new TypeError('Name muss eine Zeichenkette sein.')
      }
    },
    get: function() {
        console.log('Namen zurückgeben');
        return this._name;
    }
    /* Analog für die anderen Eigenschaften. */
  });
item.name = 'Schrödinger programmiert Java - Das etwas andere Fachbuch';
// "Neuen Namen setzen"
console.log(item.name); // "Namen zurückgeben"
// "Schrödinger programmiert Java - Das etwas andere Fachbuch"