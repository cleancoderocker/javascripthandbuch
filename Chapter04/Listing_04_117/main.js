'use strict';
const artists = new Set(
  [
    'Kyuss',
    'Tool',
    'Monster Magnet',
    'Ben Harper',
    'Queens of the Stone Age'
  ]
);
// Output: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the 
// Stone Age"
for (let artist of artists.keys()) {
  console.log(artist);
}
// Output: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the 
// Stone Age"
for (let artist of artists.values()) {
  console.log(artist);
} 
for (let artist of artists.entries()) {
  console.log(artist[0]);  // value, e.g. "Kyuss"
  console.log(artist[1]);  // value, e.g. "Kyuss"
}
// Output: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the 
// Stone Age"
for (let artist of artists) {
  console.log(artist);
}
