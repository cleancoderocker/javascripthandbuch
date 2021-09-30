'use strict';
let max = {
    firstName: 'Max',
    lastName: 'Mustermann'
};

let moritz = {
    firstName: 'Moritz',
    lastName: 'Mustermann'
};

let isMaxOrMoritz = max || moritz;
console.log(isMaxOrMoritz);
// Ausgabe: Object {firstName: "Max", lastName: "Mustermann"}
console.log(false || 'Max'); // Ausgabe: Max
console.log('Max' || null); // Ausgabe: Max
console.log(null || 'Max'); // Ausgabe: Max