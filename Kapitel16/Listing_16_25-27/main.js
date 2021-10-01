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
  const counter = this.array.length-1;
// Rückgabe des Iteratorobjekts
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
for(let artist of arrayWrapper) { // Iteration über den Iterator
  console.log(artist);
// Ausgabe hintereinander:
// "King Crimson"
// "The Doors"
// "Jimi Hendrix"
// "Deep Purple"
}