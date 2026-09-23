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
item.publisher = 'Rheinwerk Verlag';
item.order = function() {
  console.log('The book has been ordered successfully.');
}

console.log(item.publisher); // Output: Rheinwerk Verlag
item.order();                // Output: The book has been ordered successfully.
