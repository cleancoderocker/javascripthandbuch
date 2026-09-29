'use strict';
const bestOfStonerrock = [
  'Kyuss', 
  'Spiritual Beggars', 
  'Spice and the RJ Band', 
  'Band of Spice'
];
const [
  one,
  ,                   // No variable is specified here.
  three, 
  four
] = bestOfStonerrock;
console.log(one);     // "Kyuss"
// console.log(two);  // Error, not defined
console.log(three);   // "Spice and the RJ Band"
console.log(four);    // "Band of Spice"
