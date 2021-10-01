'use strict';
'use strict';
const artists = new Set()               // Erstellen eines Sets ...
  .add('Kyuss')                       // ... mit Verkettung
  .add('Tool')
  .add('Monster Magnet')
  .add('Ben Harper')
  .add('Queens of the Stone Age');
console.log(artists.size);            // Ausgabe: 5