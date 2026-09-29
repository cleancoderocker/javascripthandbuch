'use strict';
const numbersOfAlbums = new Map(    // Create a map ...
  [                                 // ... based on an array
    ['Kyuss', 4],
    ['Tool', 6],
    ['Monster Magnet', 8],
    ['Ben Harper', 9],
    ['Queens of the Stone Age', 6]
  ]
);
for (let artist of numbersOfAlbums.keys()) {
  console.log(artist);
}
