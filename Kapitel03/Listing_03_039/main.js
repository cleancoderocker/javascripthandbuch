'use strict';
const max = {
  firstName: 'Max',
  lastName: 'Mustermann'
};
const moritz = {
  firstName: 'Moritz',
  lastName: 'Mustermann'
};
const isMaxAndMoritz = max && moritz;
console.log(isMaxAndMoritz); // Ausgabe: Object {firstName: "Moritz",
// lastName: "Mustermann"}
console.log(false && 'Max'); // Ausgabe: false
console.log('Max' && null); // Ausgabe: null
console.log(null && 'Max'); // Ausgabe: null