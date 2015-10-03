function init() {
  'use strict';
  let numberOfAlbums = new Map();           // Erstellen der Map
  numberOfAlbums.set('Kyuss', 4);           // Hinzufügen eines Eintrags
  numberOfAlbums.set('Tool', 6);            // Hinzufügen eines Eintrags
  numberOfAlbums.set('Monster Magnet', 8);  // Hinzufügen eines Eintrags
  numberOfAlbums.set('Ben Harper', 9);      // Hinzufügen eines Eintrags
  console.log(numberOfAlbums.get('Kyuss')); // Ausgabe: 4
  console.log(numberOfAlbums.size);         // Ausgabe: 4
  console.log(numberOfAlbums.has('Kyuss')); // Ausgabe: true
  numberOfAlbums.delete('Kyuss');           // Löschen eines Eintrags
  console.log(numberOfAlbums.has('Kyuss')); // Ausgabe: false
  console.log(
    numberOfAlbums.has('Justin Bieber')     // Ausgabe: false
  );
  numberOfAlbums.clear();                   // Löschen aller Einträge
  console.log(numberOfAlbums.size);         // Ausgabe: 0
}
init();