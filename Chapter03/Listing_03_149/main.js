'use strict';
const person = {
  name: 'John',               // Object property
  getName: function() {
    return this.name;
  }
}

console.log(person.getName()); // Output: John
