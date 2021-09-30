'use strict';
const isLoggedIn = true;
const isAdmin = false;
const isLoggedInAndAdmin = isLoggedIn && isAdmin; // Und-Operator
const isLoggedInOrAdmin = isLoggedIn || isAdmin; // Oder-Operator
const isLoggedOut = !isLoggedIn; // Negation
console.log(isLoggedInAndAdmin); // false
console.log(isLoggedInOrAdmin); // true
console.log(isLoggedOut); // false