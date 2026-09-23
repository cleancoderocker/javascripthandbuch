'use strict';
const artist1 = {
  name: 'Kyuss'
};
const artist2 = {
  name: 'Tool'
};
const artist3 = {
  name: 'Monster Magnet'
};
const artist4 = {
  name: 'Ben Harper'
};
const artist5 = {
  name: 'Queens of the Stone Age'
};
const artist6 = {
  name: 'Justin Bieber'
};
const numbersOfAlbums = new WeakMap();      // Create the map
numbersOfAlbums.set(artist1, 4);            // Add multiple entries
numbersOfAlbums.set(artist2, 6);
numbersOfAlbums.set(artist3, 8);
numbersOfAlbums.set(artist4, 9);
numbersOfAlbums.set(artist5, 6);
console.log(numbersOfAlbums.get(artist1));  // Output: 4
console.log(numbersOfAlbums.has(artist1));  // Output: true
numbersOfAlbums.delete(artist1);            // Delete an entry
console.log(numbersOfAlbums.has(artist1));  // Output: false
console.log(numbersOfAlbums.has(artist6));  // Output: false
console.log(numbersOfAlbums);
