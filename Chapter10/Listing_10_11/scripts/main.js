'use strict';
$(document).ready(() => {
  // Add new HTML content
  $('#main').html('<div>New content</div>');
  // Access the HTML content
  const htmlContent = $('#main').html();

  // Add new text content
  $('#main').text('New text content');
  // Access the text content
  const textContent = $('#main').text();

  // Add new content after the 
  // existing content of each <div> element
  // with the CSS class "example"
  $('div.example').append('<p>Example</p>');

  // Add new content before the 
  // existing content of each <div> element
  // with the CSS class "example"
  $('div.example').prepend('<p>Example</p>');

  // Add new content after each 
  // <div> element with the CSS class "example"
  $('div.example').after('<p>Example</p>');

  // Add new content before each 
  // <div> element with the CSS class "example"
  $('div.example').before('<p>Example</p>');
});