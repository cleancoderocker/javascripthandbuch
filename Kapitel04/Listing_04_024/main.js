'use strict';
class Item {
  constructor(name, price, author, isbn) {
    this._name = name;
    this._price = price;
    this._author = author;
    this._isbn = isbn;
  }
  set name(newName) {
    if(typeof newName === 'string') {
      console.log('Neuen Namen setzen');
      this._name = newName;
    } else {
      throw new TypeError('Name muss eine Zeichenkette sein.')
    }
  }
  get name() {
    console.log('Namen zurückgeben');
    return this._name;
  }
  /* Analog für die anderen Eigenschaften. */
}
const item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3-8362-7272-8'
)
console.log(item.name); // "Namen zurückgeben"
// "Schrödinger programmiert Java"
item.name = 'Schrödinger programmiert Java - Das etwas andere Fachbuch';
// "Neuen Namen setzen"