'use strict';
function doSomething() {
  doSomethingB();
}
function doSomethingB() {
  doSomethingC();
}
function doSomethingC() {
  doSomethingD();
}
function doSomethingD() {
}
doSomething();