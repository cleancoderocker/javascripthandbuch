'use strict';
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;  // Der erste Wert ist kleiner als der zweite Wert.
  } else if(value1 > value2) {
    return 1;   // Der erste Wert ist größer als der zweite Wert.
  } else {
    return 0;   // Beide Werte sind gleich groß.
  }
}