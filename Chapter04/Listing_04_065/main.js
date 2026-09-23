'use strict';
function compare(value1, value2) {
  if (value1 < value2) {
    return -1; // The first value is smaller than the second value.
  } else if(value1 > value2) {
    return 1;  // The first value is greater than the second value.
  } else {
    return 0;  // Both values are of equal size.
  }
}
