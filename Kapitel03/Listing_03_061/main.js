'use strict';
const age = prompt('Geben Sie bitte Ihr Alter ein.');
const isAtLeast18 = age >= 18 ? true : false;
const message = isAtLeast18 ? 'Über 18' : 'Unter 18';
console.log(message);