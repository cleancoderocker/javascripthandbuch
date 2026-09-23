'use strict';
const regExp = /\Bplay\B/;
console.log(regExp.test('I play the electric guitar.'));   // false 
console.log(regExp.test('I am a teamplayer.'));            // true
