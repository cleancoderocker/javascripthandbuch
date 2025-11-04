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
// Ausgabe: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the
// Stone Age"
for (let artist of artists.keys()) {
  console.log(artist);
}
// Ausgabe: "Kyuss", "Tool", "Monster Magnet", "Ben Harper", "Queens of the
// Stone Age"
for (let artist of artists.values()) {
  console.log(artist);
}
for (let artist of artists.entries()) {
  console.log(artist[0]); // Wert, z. B. "Kyuss"
  console.log(artist[1]); // Wert, z. B. "Kyuss"
}
// Ausgabe: "Kyuss", "Tool", "Monster Magnet", "Ben Harper",
// "Queens of the Stone Age"
for (let artist of artists) {
  console.log(artist);
}
