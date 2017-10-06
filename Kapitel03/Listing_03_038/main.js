'use strict';
let isLoggedIn = true;
let isAdmin = false;
let isLoggedInAndAdmin = isLoggedIn && isAdmin; // Und-Operator
let isLoggedInOrAdmin = isLoggedIn || isAdmin; // Oder-Operator
let isLoggedOut = !isLoggedIn; // Negation
console.log(isLoggedInAndAdmin); // false
console.log(isLoggedInOrAdmin); // true
console.log(isLoggedOut); // false