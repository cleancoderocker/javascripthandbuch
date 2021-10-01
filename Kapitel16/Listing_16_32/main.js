'use strict';
function* counter() {
  let counter = 0;
  while(true) {
    counter++;
    const restart = yield counter;
    if(restart === true) {
      counter = 0;
    }
  }
}