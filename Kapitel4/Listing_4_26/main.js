'use strict';
let item = {
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
// Dateneigenschaft
item.isbn = '978-3836217408';
item._name = 'Schrödinger programmiert Java';
console.log(item._name);
// Zugriffseigenschaft
item.name = 'Schrödinger programmiert Java - Das etwas andere Fachbuch';
// Zugriff ist in allen Fällen gleich
console.log(item.isbn);
console.log(item.name);