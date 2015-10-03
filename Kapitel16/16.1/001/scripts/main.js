function init() {
  'use strict';
  let artists = new Set();            // Erstellen des Sets
  artists.add('Kyuss');               // Hinzufügen eines Wertes
  artists.add('Kyuss');               // Hinzufügen eines weiteren Wertes
  artists.add('Tool');                // Hinzufügen eines weiteren Wertes
  artists.add('Monster Magnet');      // Hinzufügen eines weiteren Wertes
  artists.add('Ben Harper');          // Hinzufügen eines weiteren Wertes
  console.log(artists.size);          // Ausgabe: 4
  console.log(artists.has('Kyuss'));  // Ausgabe: true
  artists.delete('Kyuss');            // Löschen eines Wertes
  console.log(artists.has('Kyuss'));  // Ausgabe: false
  console.log(
    artists.has('Justin Bieber')      // Ausgabe: false
  );
  artists.clear();                    // Löschen aller Werte
  console.log(artists.size);          // Ausgabe: 0
}
init();