'use strict';
const regExp = /\bspiele\b/;
console.log(regExp.test('Ich spiele E-Gitarre.'));              // true
console.log(regExp.test('Ich bin ein Schallplattenspieler.'));  // false