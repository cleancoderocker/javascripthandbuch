'use strict';
let artist1 = {
  name: 'Kyuss'
};
let artist2 = {
  name: 'Tool'
};
let artist3 = {
  name: 'Monster Magnet'
};
let artist4 = {
  name: 'Ben Harper'
};
let artist5 = {
  name: 'Queens of the Stone Age'
};
let artist6 = {
  name: 'Justin Bieber'
};
let numbersOfAlbums = new WeakMap();          // Erstellen der Map
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