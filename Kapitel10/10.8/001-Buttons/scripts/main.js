$(document).ready(function () {
  'use strict';
  $('input[type=submit], a, button')
    .button()
    .click(function (event) {
      event.preventDefault();
    });
  $('#check').button();
  $('#format').buttonset();
  $('#radio').buttonset();
});
