'use strict';
// Datei "ModuleA.js"
// Laden eines Moduls
const moduleB = require('ModuleB');
const x = 5;
let y = 4711;
function getX() {
  return x;
}
function getY() {
  return y;
}
function print() {
  moduleB.printHelloWorld();
  console.log(
    'x: ' +
    getX() +
    ', y: ' +
    getY()
  );
}
// Öffentliches API
exports.print = print;

