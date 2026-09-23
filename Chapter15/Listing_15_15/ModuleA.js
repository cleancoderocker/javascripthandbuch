'use strict';
// File "ModuleA.js"
// Loading a module
const moduleB = require('ModuleB');
const x = 5;
const y = 4711;
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
// public API
exports.print = print; 
