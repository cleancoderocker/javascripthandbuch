'use strict';
let max = {
  firstName: 'Max',
  lastName: 'Mustermann'
};
let moritz = {
  firstName: 'Moritz',
  lastName: 'Mustermann'
};
let isMaxAndMoritz = max && moritz;
console.log(isMaxAndMoritz); // Ausgabe: Object {firstName: "Moritz",
// lastName: "Mustermann"}
console.log(false && 'Max'); // Ausgabe: false
console.log('Max' && null); // Ausgabe: null
console.log(null && 'Max'); // Ausgabe: null