'use strict';
let age = prompt('Geben Sie bitte Ihr Alter ein.');
let isAtLeast18 = age >= 18 ? true : false;
let message = isAtLeast18 ? 'Über 18' : 'Unter 18';
console.log(message);