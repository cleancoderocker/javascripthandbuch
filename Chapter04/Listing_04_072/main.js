'use strict';
const transactions = [
    -20.0, 500.50, -40.0, -34.50, 200, 500.50, -20, 200
];
console.log(transactions.lastIndexOf(-20.0));     // Output: 6
console.log(transactions.lastIndexOf(500));       // Output: -1
console.log(transactions.lastIndexOf(200));       // Output: 7
console.log(transactions.lastIndexOf(200, 5));    // Output: 4
