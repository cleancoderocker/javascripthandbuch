'use strict';
const item = {
  _name: 'JavaScript: The Comprehensive Guide', 
  _price: 59.95,
  _author: 'Philip Ackermann', 
  _isbn: '978-1-4932-2286-5', 
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
console.log(item.name);    // "Return name"
                           // "JavaScript: The Comprehensive Guide"
item.name = 'JavaScript: The Comprehensive Guide by Philip Ackermann';
                           // "Set new name"
