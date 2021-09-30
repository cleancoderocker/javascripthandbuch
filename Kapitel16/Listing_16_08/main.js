'use strict';
const numbersOfAlbums = new Map();                    // Erstellen der Map
numbersOfAlbums.set('Kyuss', 4);                    // Hinzufügen mehrerer Einträge
numbersOfAlbums.set('Tool', 6);
numbersOfAlbums.set('Monster Magnet', 8);
numbersOfAlbums.set('Ben Harper', 9);
numbersOfAlbums.set('Queens of the Stone Age', 6);
for (let entry of numbersOfAlbums) {
  console.log(entry[0]);                            // Schlüssel
  console.log(entry[1]);                            // Wert
}