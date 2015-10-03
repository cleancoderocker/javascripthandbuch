function init() {
  (function() {
    "use strict";
    let artists = new Set(      // Erstellen eines Sets ...
      [                         // ... auf Basis eines Arrays.
        'Kyuss',
        'Tool',
        'Monster Magnet',
        'Ben Harper'
      ]
    );
    console.log(artists.size);  // Ausgabe: 4
  })();
  (function() {
    "use strict";
    let artists = new Set()     // Erstellen eines Sets ...
      .add('Kyuss')             // ... mit Verkettung.
      .add('Tool')
      .add('Monster Magnet')
      .add('Ben Harper')
    console.log(artists.size);  // Ausgabe: 4
  })();
}
init();