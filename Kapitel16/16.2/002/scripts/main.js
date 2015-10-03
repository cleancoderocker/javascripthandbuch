function init() {
  (function() {
    'use strict';
    let numberOfAlbums = new Map(      // Erstellen einer Map ...
      [                                // ... auf Basis eines Arrays.
        ['Kyuss', 4],
        ['Tool', 6],
        ['Monster Magnet', 8],
        ['Ben Harper', 9]
      ]);
    console.log(numberOfAlbums.size);  // Ausgabe: 4
  })();
  (function() {
    'use strict';
    let numberOfAlbums = new Map()     // Erstellen einer Map ...
      .set('Kyuss', 4)                 // ... mit Verkettung.
      .set('Tool', 6)
      .set('Monster Magnet', 8)
      .set('Ben Harper', 9)
    console.log(numberOfAlbums.size);  // Ausgabe: 4
  })();
}
init();