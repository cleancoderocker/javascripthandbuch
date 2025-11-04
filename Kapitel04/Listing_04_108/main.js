'use strict';
const numbersOfAlbums = new Map(                // Erstellen einer Map ...
  [                                           // ... auf Basis eines Arrays
    ['Kyuss', 4],
    ['Tool', 6],
    ['Monster Magnet', 8],
    ['Ben Harper', 9],
    ['Queens of the Stone Age', 6]
  ]
);
for (const album of numbersOfAlbums.keys()) {
  console.log(album);
}