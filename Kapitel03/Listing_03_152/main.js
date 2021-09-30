'use strict';
function getNameGlobal() {
  return this.name;
}
const person = {
  name : 'Moritz',
  getName : getNameGlobal
}
const artist = {
  name : 'Kyuss',
  getName : getNameGlobal
}
console.log(person.getName()); // Ausgabe: Moritz
console.log(artist.getName()); // Ausgabe: Kyuss