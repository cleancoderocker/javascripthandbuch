'use strict';
function getNameGlobal() {
  return this.name;
}
console.log(getNameGlobal()); // undefined