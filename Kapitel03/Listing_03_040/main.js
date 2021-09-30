'use strict';
const max = {
    firstName: 'Max',
    lastName: 'Mustermann'
};

const moritz = {
    firstName: 'Moritz',
    lastName: 'Mustermann'
};

const isMaxOrMoritz = max || moritz;
console.log(isMaxOrMoritz);
// Ausgabe: Object {firstName: "Max", lastName: "Mustermann"}
console.log(false || 'Max'); // Ausgabe: Max
console.log('Max' || null); // Ausgabe: Max
console.log(null || 'Max'); // Ausgabe: Max