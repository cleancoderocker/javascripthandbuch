'use strict';
const artists = [
  'Deep Purple', 
  'Jimi Hendrix', 
  'The Doors', 
  'King Crimson'
];
const arrayWrapper = {
  array: artists
}

arrayWrapper[Symbol.iterator] = function() {
  const array = this.array;
  let counter = this.array.length-1;
  // Return of the iterator object
  return {
    next: function(){
      if (counter < 0) {
        return {
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

for(let artist of arrayWrapper) {  // Iteration over the iterator
  console.log(artist);
  // Output one after the other:
  // "King Crimson"
  // "The Doors"
  // "Jimi Hendrix"
  // "Deep Purple"
}
