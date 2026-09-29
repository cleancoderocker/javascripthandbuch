'use strict';
const numbersOfAlbums = new Map()   // Create a map ...
  .set('Kyuss', 4)                  // ... using method chaining
  .set('Tool', 6)
  .set('Monster Magnet', 8)
  .set('Ben Harper', 9)
  .set('Queens of the Stone Age', 6);
console.log(numbersOfAlbums.size);  // Output: 5
