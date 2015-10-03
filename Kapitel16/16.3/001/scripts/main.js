function init() {
  'use strict';
  let artists = ['Deep Purple', 'Jimi Hendrix', 'The Doors', 'King Crimson'];
  let iterator = artists.values();  // Erzeugen des Iterators
  let artist = iterator.next();     // Erster Wert im Iterator
  console.log(artist);              // Ausgabe: {value: 'Deep Purple', done: false}
  artist = iterator.next();         // Weiter im Iterator
  console.log(artist);              // Ausgabe: {value: 'Jimi Hendrix', done: false}
  artist = iterator.next();         // Weiter im Iterator
  console.log(artist);              // Ausgabe: {value: 'The Doors', done: false}
  artist = iterator.next();         // Weiter im Iterator
  console.log(artist);              // Ausgabe: {value: 'King Crimson', done: false}
  artist = iterator.next();         // Weiter im Iterator
  console.log(artist);              // Ausgabe: {done: true}

  iterator = artists.values();      // Erzeugen des Iterators
  for(let artist of iterator) {     // Iteration über den Iterator
    console.log(artist);            // Ausgabe hintereinander:
                                    // "Deep Purple"
                                    // "Jimi Hendrix"
                                    // "The Doors"
                                    // "King Crimson"
  }
}
init();