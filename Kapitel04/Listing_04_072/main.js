'use strict';
const transactions = [
    -20.0, 500.50, -40.0, -34.50, 200, 500.50, -20, 200
];
console.log(transactions.lastIndexOf(-20.0));   // Ausgabe: 6
console.log(transactions.lastIndexOf(500));     // Ausgabe: -1
console.log(transactions.lastIndexOf(200));     // Ausgabe: 7
console.log(transactions.lastIndexOf(200, 5));  // Ausgabe: 4