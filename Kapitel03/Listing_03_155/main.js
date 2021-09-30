'use strict';
funktion divide(x, y) {
  return normalize(x) / normalize(y);
}
function normalize(x) {
  return x <= 0 ? 1 : x;
}