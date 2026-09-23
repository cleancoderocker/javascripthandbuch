'use strict';
$(document).ready(() => {
  // Selection of the third <li> element
  $('li').eq(2);
  // Selection of the first <li> element
  $('li').first();
  // Selection of <li> elements that have the CSS class ".selected"
  $('li').filter('.selected');
  // Selection of all <li> elements that contain a <ul> element
  $('li').has('ul');
  // Selection of all elements that have the CSS class ".selected"
  $('li').has('.selected');
  // Selection of the last <li> element
  $('li').last();
  // Selection of all class attributes of the <li> elements
  $('li').map(() => { this.className });
  // Selection of all <li> elements that do not have the CSS class ".selected"
  $('li').not('.selected');
  // Selection of the first two <li> elements
  $('li').slice(0, 2);
});