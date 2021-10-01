'use strict';
const numbersOfAlbums = new Map();                    // Erstellen der Map
numbersOfAlbums.set('Kyuss', 4);                    // Hinzufügen mehrerer Einträge
numbersOfAlbums.set('Tool', 6);
numbersOfAlbums.set('Monster Magnet', 8);
numbersOfAlbums.set('Ben Harper', 9);
numbersOfAlbums.set('Queens of the Stone Age', 6);
console.log(numbersOfAlbums.get('Kyuss'));          // Ausgabe: 4
console.log(numbersOfAlbums.size);                  // Ausgabe: 5
console.log(numbersOfAlbums.has('Kyuss'));          // Ausgabe: true
numbersOfAlbums.delete('Kyuss');                    // Löschen eines Eintrags
console.log(numbersOfAlbums.has('Kyuss'));          // Ausgabe: false
console.log(
  numbersOfAlbums.has('Justin Bieber')              // Ausgabe: false
);
numbersOfAlbums.clear();                            // Löschen aller Einträge
console.log(numbersOfAlbums.size);                  // Ausgabe: 0