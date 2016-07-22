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
let artists = new WeakSet(
  [
    artist1,
    artist2,
    artist3,
    artist4,
    artist5
  ]
);
console.log(artists.has(artist1));  // Ausgabe: true
artists.delete(artist1);            // Löschen eines Wertes
console.log(artists.has(artist1));  // Ausgabe: false
console.log(
  artists.has(artist6)              // Ausgabe: false
);
console.log(artists);