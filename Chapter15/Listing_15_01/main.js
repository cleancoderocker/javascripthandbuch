'use strict';
var MathUtilities = MathUtilities || {};
MathUtilities.MAX = 4711;
MathUtilities.add = function(x, y) {
  return x + y;
};
const result = MathUtilities.add(2, 2);
console.log(result); // 4
console.log(MathUtilities.MAX); // 4711
MathUtilities.MAX = 2345;
console.log(MathUtilities.MAX); // 2345