'use strict';
const item = Object.create(Object.prototype, {
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
  }
});
// "Neuen Namen setzen"
item.name = 'Schrödinger programmiert Java - Das etwas andere Fachbuch';
// "Namen zurückgeben"
console.log(item.name);
// Ausgabe:
// "Schrödinger programmiert Java - Das etwas andere Fachbuch"