'use strict';
const item = {
  _name: 'Schrödinger programmiert Java',
  _price: 44.90,
  _author: 'Philip Ackermann',
  _isbn: '978-3-8362-7272-8',
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
console.log(item.name); // "Namen zurückgeben"
// "Schrödinger programmiert Java"
item.name = 'Schrödinger programmiert Java - Das etwas andere Fachbuch';
// "Neuen Namen setzen"