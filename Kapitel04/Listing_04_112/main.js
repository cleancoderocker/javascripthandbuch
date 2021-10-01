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
const numbersOfAlbums = new WeakMap();          // Erstellen der Map
numbersOfAlbums.set(artist1, 4);              // Hinzufügen mehrerer Einträge
numbersOfAlbums.set(artist2, 6);
numbersOfAlbums.set(artist3, 8);
numbersOfAlbums.set(artist4, 9);
numbersOfAlbums.set(artist5, 6);
console.log(numbersOfAlbums.get(artist1));    // Ausgabe: 4
console.log(numbersOfAlbums.has(artist1));    // Ausgabe: true
numbersOfAlbums.delete(artist1);              // Löschen eines Eintrags
console.log(numbersOfAlbums.has(artist1));    // Ausgabe: false
console.log(
  numbersOfAlbums.has(artist6)                // Ausgabe: false
);
console.log(numbersOfAlbums);