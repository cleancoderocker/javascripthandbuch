$(document).ready(function () {
  'use strict';
  var cities = [
    'Berlin',
    'Bonn',
    'Frankfurt am Main',
    'Hamburg',
    'Köln',
    'München',
    'Stuttgart'
  ];
  $('#city').autocomplete({
    source: cities
  });
});
