'use strict';
function getNameGlobal() {
  return this.name;
}
let person = {
  name : 'Moritz',
  getName : getNameGlobal
}
let artist = {
  name : 'Kyuss',
  getName : getNameGlobal
}
console.log(person.getName()); // Ausgabe: Moritz
console.log(artist.getName()); // Ausgabe: Kyuss