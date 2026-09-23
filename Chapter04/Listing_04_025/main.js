'use strict';
function Item(name, price, author, isbn) {
  this._name = name;
  this._price = price;
  this._author = author;
  this._isbn = isbn;
}

Item.prototype = {
  set name(newName) {
    if(typeof newName === 'string') {
      console.log('Set new name');
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string.')
    }
  },
  get name() {
    console.log('Return name');
    return this._name;
  }
  /* Same for the other properties. */
};
const item = new Item(
  'JavaScript: The Comprehensive Guide', 
  59.95, 
  'Philip Ackermann',
  '978-1-4932-2286-5'
)

console.log(item.name);    // "Return name"
                           // "JavaScript: The Comprehensive Guide"
item.name = 'JavaScript: The Comprehensive Guide by Philip Ackermann';
                           // "Set new name"
