'use strict';
const names = ['Max', 'Moritz', 'Peter'];
const namesString = names.toString();
console.log(namesString);       // Ausgabe: Max,Moritz,Peter
const namesLocaleString = names.toLocaleString();
console.log(namesLocaleString); // Ausgabe: Max,Moritz,Peter
const namesValue = names.valueOf();
console.log(namesValue);        // Ausgabe: ["Max", "Moritz", "Peter"]
const namesJoined = names.join('-');
console.log(namesJoined);       // Ausgabe: Max-Moritz-Peter