'use strict';
function* counter() {
  const counter = 0;
  while(true) {
    counter++;
    const restart = yield counter;
    if(restart === true) {
      counter = 0;
    }
  }
}