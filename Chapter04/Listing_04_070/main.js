'use strict';
const transactions = [
  -20.0, 500.50, -40.0, -34.50, 200, 500.50, -20, 200
];
console.log(transactions.indexOf(-20.0));     // Output: 0
console.log(transactions.indexOf(500));       // Output: -1
console.log(transactions.indexOf(200));       // Output: 4
console.log(transactions.indexOf(200, 5));    // Output: 7
