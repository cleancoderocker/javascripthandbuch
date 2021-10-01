'use strict';
const artists = new Set();              // Erstellen des Sets
artists.add('Kyuss');                   // Hinzufügen verschiedener Werte
artists.add('Kyuss');
artists.add('Tool');
artists.add('Monster Magnet');
artists.add('Ben Harper');
artists.add('Queens of the Stone Age');
console.log(artists.size);              // Ausgabe: 5
console.log(artists.has('Kyuss'));      // Ausgabe: true
artists.delete('Kyuss');                // Löschen eines Wertes
console.log(artists.has('Kyuss'));      // Ausgabe: false
console.log(
  artists.has('Justin Bieber')          // Ausgabe: false
);
artists.clear();                        // Löschen aller Werte
console.log(artists.size);              // Ausgabe: 0