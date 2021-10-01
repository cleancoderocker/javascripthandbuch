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
// Dateneigenschaft
item.isbn = '978-3-8362-7272-8';
console.log(item.isbn);

// Möglich, aber nicht erwünscht, da der Zugriff über set und get erfolgen soll.
item._name = 'Schrödinger programmiert Java';
console.log(item._name);

// Zugriffseigenschaft
item.name = 'Schrödinger programmiert Java - Das etwas andere Fachbuch';
console.log(item.name);