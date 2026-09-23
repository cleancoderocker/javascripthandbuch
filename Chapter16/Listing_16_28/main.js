'use strict';
function* returnOneThenReturnTwo() {
  console.log('A');
  yield 1;               // Generator stops here and returns the value 1.
  console.log('B');      // On the next call, the generator continues ... 
                         // ... to execute from here ...
  yield 2;               // ... up to this line, at which the generator stops...
                         // ... again and returns the value 2 this time.
  console.log('C');
}
