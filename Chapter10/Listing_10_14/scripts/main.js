'use strict';
$(document).ready(() => {
  // Read the background color of the <body> element
  const backgroundColor = $('body').css('background-color');
  // Read the foreground color and the background color of the <body> element
  const properties = $('body').css(['color', 'background-color']);
  // Set the background color of the <body> element
  $('body').css('background-color', 'blue');
  // Set the foreground color and the background color of the <body> element
  $('body').css({
    'color': 'white',
    'background-color': 'blue'
  });
});