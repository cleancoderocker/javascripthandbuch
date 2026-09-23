'use strict';
const artists = [
  'Deep Purple', 
  'Jimi Hendrix', 
  'The Doors', 
  'King Crimson'
];
function createIterator(array) {
  let counter = array.length-1;
  // Return of the iterator object
  return {
    next: function(){
      if (counter < 0) {
        return {
          value: undefined, 
          done: true
        };
      } else {
        return {
          value: array[counter--],
          done: false
        };
      }
    }
  }
};
const iterator = createIterator(artists);
const artist = iterator.next();    // First value in the iterator
console.log(artist);               // Output: {value: 'King Crimson', done: false}
artist = iterator.next();          // Continue in the iterator
console.log(artist);               // Output: {value: 'The Doors', done: false}
artist = iterator.next();          // Continue in the iterator
console.log(artist);               // Output: {value: 'Jimi Hendrix', done: false}
artist = iterator.next();          // Continue in the iterator
console.log(artist);               // Output: {value: 'Deep Purple', done: false}
artist = iterator.next();          // Continue in the iterator
console.log(artist);               // Output: {value: undefined, done: true}
