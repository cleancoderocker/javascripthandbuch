'use strict';
let names = ['Max', 'Moritz', 'Peter'];
let namesString = names.toString();
console.log(namesString);       // Ausgabe: Max,Moritz,Peter
let namesLocaleString = names.toLocaleString();
console.log(namesLocaleString); // Ausgabe: Max,Moritz,Peter
let namesValue = names.valueOf();
console.log(namesValue);        // Ausgabe: ["Max", "Moritz", "Peter"]
let namesJoined = names.join('-');
console.log(namesJoined);       // Ausgabe: Max-Moritz-Peter