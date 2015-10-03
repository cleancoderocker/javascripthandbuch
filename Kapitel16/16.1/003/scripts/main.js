function init() {
  "use strict";
  let artists = new Set(
    [
      'Kyuss',
      'Tool',
      'Monster Magnet',
      'Ben Harper'
    ]
  );
  for (let artist of artists) {
    console.log(artist);
  }
}
init();