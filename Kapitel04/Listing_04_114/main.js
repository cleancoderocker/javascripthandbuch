'use strict';
let text = 'Max,Mustermann,4711,45,180,80';
let result = text.split(',');
let firstName = result[0];
let lastName = result[1];
let id = result[2];
let age = result[3];
let height = result[4];
let weight = result[5];
console.log(firstName);   // Max
console.log(lastName);    // Mustermann
console.log(id);          // 4711
console.log(age);         // 45
console.log(height);      // 180
console.log(weight);      // 80