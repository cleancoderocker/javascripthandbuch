'use strict';
const names = ['John', 'James', 'Peter'];
const namesString = names.toString();
console.log(namesString);           // Output: John,James,Peter
const namesLocaleString = names.toLocaleString();
console.log(namesLocaleString);     // Output: John,James,Peter
const namesValue = names.valueOf();
console.log(namesValue);            // Output: ["John", "James", "Peter"]
const namesJoined = names.join('-');
console.log(namesJoined);           // Output: John-James-Peter
