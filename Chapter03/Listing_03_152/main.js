'use strict';
function getNameGlobal() {
  return this.name;
}
const person = {
  name : 'James',
  getName : getNameGlobal
}

const artist = {
  name : 'Kyuss',
  getName : getNameGlobal
}
console.log(person.getName()); // Output: James
console.log(artist.getName()); // Output: Kyuss
