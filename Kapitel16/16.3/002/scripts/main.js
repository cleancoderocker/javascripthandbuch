function init() {
  'use strict';
  let artists = ['Deep Purple', 'Jimi Hendrix', 'The Doors', 'King Crimson'];
  let artistsWrapper = {}
  artistsWrapper.artists = artists;
  artistsWrapper[Symbol.iterator] = function() {
    let artists = this.artists;
    let counter = this.artists.length-1;
    // Rückgabe des Iterator-Objekts
    return {
      next: function(){
        if (counter < 0) {
          return {
            done: true
          };
        } else {
          return {
            value: artists[counter--],
            done: false
          };
        }
      }
    }
  };
  let iterator = artistsWrapper[Symbol.iterator]();
  let artist = iterator.next();      // Erster Wert im Iterator
  console.log(artist);               // Ausgabe: {value: 'King Crimson', done: false}
  artist = iterator.next();          // Weiter im Iterator
  console.log(artist);               // Ausgabe: {value: 'The Doors', done: false}
  artist = iterator.next();          // Weiter im Iterator
  console.log(artist);               // Ausgabe: {value: 'Jimi Hendrix', done: false}
  artist = iterator.next();          // Weiter im Iterator
  console.log(artist);               // Ausgabe: {value: 'Deep Purple', done: false}
  artist = iterator.next();          // Weiter im Iterator
  console.log(artist);               // Ausgabe: {done: true}


  for(let artist of artistsWrapper) {  // Iteration über den Iterator
    console.log(artist);                   // Ausgabe hintereinander:
                                              // "King Crimson"
                                              // "The Doors"
                                              // "Jimi Hendrix"
                                              // "Deep Purple"
  }
}
init();