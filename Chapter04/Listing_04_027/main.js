'use strict';
const item = Object.create(Object.prototype, {
  name: {
    set: function(newName) {
      if (typeof newName === 'string') {
        console.log('Set new name');
        this._name = newName;
      } else {
        throw new TypeError('Name must be a string.')
      }
    },
    get: function() {
        console.log('Return name');
        return this._name;
    }
    /* Same for the other properties. */
  }
});
// "Set new name"
item.name = 'JavaScript: The Comprehensive Guide by Philip Ackermann';
// "Return name"
console.log(item.name);
// Output:
// "JavaScript: The Comprehensive Guide by Philip Ackermann"
