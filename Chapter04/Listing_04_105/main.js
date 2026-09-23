'use strict';
const numbersOfAlbums = new Map();          // Create the map
numbersOfAlbums.set('Kyuss', 4);            // Add multiple entries
numbersOfAlbums.set('Tool', 6);
numbersOfAlbums.set('Monster Magnet', 8);
numbersOfAlbums.set('Ben Harper', 9);
numbersOfAlbums.set('Queens of the Stone Age', 6);
console.log(numbersOfAlbums.get('Kyuss'));  // Output: 4
console.log(numbersOfAlbums.size);          // Output: 5
console.log(numbersOfAlbums.has('Kyuss'));  // Output: true
numbersOfAlbums.delete('Kyuss');            // Delete an entry
console.log(numbersOfAlbums.has('Kyuss'));  // Output: false
console.log(
  numbersOfAlbums.has('Justin Bieber')      // Output: false
);
numbersOfAlbums.clear();                    // Clear all entries
console.log(numbersOfAlbums.size);          // Output: 0
