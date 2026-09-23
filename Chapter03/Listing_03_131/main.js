'use strict';
function sum(x, y) {
  const result = 
    normalize(x) + 
    normalize(y);

  function normalize(i) {
    if(i < 0) {
      return 0;
    }
    return i;
  }

  return result;
}
console.log(sum(-5, 5));     // Output: 5
console.log(normalize(-5));  // ReferenceError: normalize is not defined
