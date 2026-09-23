'use strict';
const artists = new Set()   // Create a set ...
  .add('Kyuss')             // ... using chaining
  .add('Tool')
  .add('Monster Magnet')
  .add('Ben Harper')
  .add('Queens of the Stone Age');
console.log(artists.size);  // Output: 5
