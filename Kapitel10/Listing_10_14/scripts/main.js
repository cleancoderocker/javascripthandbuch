'use strict';
$(document).ready(() => {
  // Auslesen der Hintergrundfarbe des <body>-Elements
  let backgroundColor = $('body').css('background-color');
  // Auslesen der Vordergrundfarbe und der Hintergrundfarbe des <body>-Elements
  let properties = $('body').css(['color', 'background-color']);
  // Setzen der Hintergrundfarbe des <body>-Elements
  $('body').css('background-color', 'blue');
  // Setzen der Vordergrundfarbe und der Hintergrundfarbe des <body>-Elements
  $('body').css({
    'color': 'white',
    'background-color': 'blue'
  });
});