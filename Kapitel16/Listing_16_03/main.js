'use strict';
const numbersOfAlbums = new Map()       // Erstellen einer Map ...
  .set('Kyuss', 4)                    // ... mit Methodenverkettung
  .set('Tool', 6)
  .set('Monster Magnet', 8)
  .set('Ben Harper', 9)
  .set('Queens of the Stone Age', 6);
console.log(numbersOfAlbums.size);    // Ausgabe: 5