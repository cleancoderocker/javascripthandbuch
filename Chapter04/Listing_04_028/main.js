'use strict';
const item = {
  isbn: '',
  _name: '', 
  /* Here are the other properties. */
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
}
// Data property
item.isbn = '978-1-4932-2286-5';
console.log(item.isbn);
// Possible, but not desired, because access
// is to take place using set and get.
item._name = 'JavaScript: The Comprehensive Guide';
console.log(item._name);
// Access property
item.name = 'JavaScript: The Comprehensive Guide by Philip Ackermann';
console.log(item.name);
