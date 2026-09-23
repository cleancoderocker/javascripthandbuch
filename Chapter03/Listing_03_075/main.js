'use strict';
const age = prompt('Please enter your age.');
const isAtLeast18 = age >= 18 ? true : false;
const message = isAtLeast18 ? 'Over 18' : 'Under 18';
console.log(message);
