'use strict';
const regExp = /\Bspiele\B/;
console.log(regExp.test('Ich spiele E-Gitarre.'));              // false
console.log(regExp.test('Ich bin ein Schallplattenspieler.'));  // true