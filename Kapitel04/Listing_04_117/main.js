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
const artists = new WeakSet(
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