'use strict';
let artists = [
  'Deep Purple',
  'Jimi Hendrix',
  'The Doors',
  'King Crimson'
];
let iterator = artists.values();  // Erzeugen des Iterators
let artist = iterator.next();     // erster Wert im Iterator
console.log(artist);              // Ausgabe: {value: 'Deep Purple', done: false}
artist = iterator.next();         // weiter im Iterator
console.log(artist);              // Ausgabe: {value: 'Jimi Hendrix', done: false}
artist = iterator.next();         // weiter im Iterator
console.log(artist);              // Ausgabe: {value: 'The Doors', done: false}
artist = iterator.next();         // weiter im Iterator
console.log(artist);              // Ausgabe: {value: 'King Crimson', done: false}
artist = iterator.next();         // weiter im Iterator
console.log(artist);              // Ausgabe: {value: undefined, done: true}