'use strict';
const artists = [
  'Deep Purple', 
  'Jimi Hendrix', 
  'The Doors', 
  'King Crimson'
];
const iterator = artists.values();  // Creating the iterator
const artist = iterator.next();     // First value in the iterator
console.log(artist);                // Output: {value: 'Deep Purple', done: false}
artist = iterator.next();           // Continue in the iterator
console.log(artist);                // Output: {value: 'Jimi Hendrix', done: false}
artist = iterator.next();           // Continue in the iterator
console.log(artist);                // Output: {value: 'The Doors', done: false}
artist = iterator.next();           // Continue in the iterator
console.log(artist);                // Output: {value: 'King Crimson', done: false}
artist = iterator.next();           // Continue in the iterator
console.log(artist);                // Output: {value: undefined, done: true}
