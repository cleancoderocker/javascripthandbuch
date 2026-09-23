'use strict';
$(document).ready(() => {
  const element = $('a#main');
  // Read access to the "href" attribute of the element
  const href = element.attr('href');
  // Write access to the "href" attribute of the element
  element.attr('href', 'index.html');
  // Alternative write access via configuration object
  element.attr({
    href: 'index.html',
    target: '_blank'
  });
  // Remove the "href" attribute from the element
  element.removeAttr('href');
  // Add a CSS class
  element.addClass('highlighted');
  // Remove a CSS class
  element.removeClass('highlighted');
});