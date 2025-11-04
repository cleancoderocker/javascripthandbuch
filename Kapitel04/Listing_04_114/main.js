'use strict';
const artists = new Set(          // Erstellen eines Sets ...
  [                             // ... auf Basis eines Arrays
    'Kyuss',
    'Kyuss',
    'Tool',
    'Monster Magnet',
    'Ben Harper',
    'Queens of the Stone Age'
  ]
);
console.log(artists.size);     // Ausgabe: 5