'use strict';
const item = {
  isbn: '',
  _name: '',
  /* Hier die anderen Eigenschaften */
  set name(newName) {
    if(typeof newName === 'string') {
      console.log('Neuen Namen setzen');
      this._name = newName;
    } else {
      throw new TypeError('Name muss eine Zeichenkette sein.')
    }
  },
  get name() {
    console.log('Namen zurückgeben');
    return this._name;
  }
  /* Analog für die anderen Eigenschaften. */
}
item.publisher = 'Galileo Press';
item.order = function() {
  console.log('Das Buch wurde erfolgreich bestellt.');
}