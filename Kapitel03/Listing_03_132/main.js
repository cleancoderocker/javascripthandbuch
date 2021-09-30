'use strict';
const name = "globaler Name";
function getNameGlobal() {
  return this.name;
}
console.log(getNameGlobal()); // Ausgabe: globaler Name