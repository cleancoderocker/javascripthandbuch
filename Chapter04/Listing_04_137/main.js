'use strict';
const regExp = /\bplay\b/;
console.log(regExp.test('I play the electric guitar.'));   // true 
console.log(regExp.test('I am a teamplayer.'));            // false
