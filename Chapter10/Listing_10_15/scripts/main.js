'use strict';
$(document).ready(() => {
  // Child elements
  // Selection of all child elements of <ul>
  const listItems = $('ul').children();
  // Selection of the next link within <ul>
  const closestLink = $('ul').closest('a');

  // Sibling elements
  // Selection of the next sibling element
  const nextSibling = $('ul').next();
  // Selection of the next link element
  const nextSiblingLink = $('ul').next('a');
  // Selection of all next sibling elements
  const nextSiblings = $('ul').nextAll();
  // Selection of all next link elements
  const nextSiblingLinks = $('div').nextAll('a');
  // Selection of all next sibling elements up to the specified element
  const nextSiblingsUntil = $('div').nextUntil('a');
  // Selection of the previous sibling element
  const previousSibling = $('ul').prev();
  // Selection of all previous sibling elements
  const previousSiblings = $('ul').prevAll();
  // Selection of all previous sibling elements up to the specified element
  const previousSiblingsUntil = $('div').prevUntil('a');
  // Selection of all sibling elements
  const siblings = $('div').siblings();

  // Parent elements
  // Selection of the parent element
  const parent = $('ul').parent();
  // Selection of all parent elements
  const parents = $('ul').parents();
  // Selection of all parent elements up to the specified element
  const parentsUntil = $('ul').parentsUntil('div');
});