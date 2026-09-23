'use strict';
const numbersOfAlbums = new Map();
numbersOfAlbums.set('Kyuss', 4);
numbersOfAlbums.set('Tool', 6);
numbersOfAlbums.set('Monster Magnet', 8);
numbersOfAlbums.set('Ben Harper', 9);
numbersOfAlbums.set('Queens of the Stone Age', 6);

for (let entry of numbersOfAlbums) {
  console.log(entry[0]);      // Key
  console.log(entry[1]);      // Value
}
 
// Alternative access via array destructuring:
for (let [ bandName, numberOfAlbums ] of numbersOfAlbums) {
  console.log(bandName);
  console.log(numberOfAlbums);
}
