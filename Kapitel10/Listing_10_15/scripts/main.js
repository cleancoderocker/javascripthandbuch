'use strict';
$(document).ready(() => {
  // Kindelemente
  // Auswahl aller Kindelemente von <ul>
  let listItems = $('ul').children();
  // Auswahl des nächsten Links innerhalb <ul>
  let closestLink = $('ul').closest('a');
  // Geschwisterelemente
  // Auswahl des nächsten Geschwisterelements
  let nextSibling = $('ul').next();
  // Auswahl des nächsten Linkelements
  let nextSiblingLink = $('ul').next('a');
  // Auswahl aller nächsten Geschwisterelemente
  let nextSiblings = $('ul').nextAll();
  // Auswahl aller nächsten Linkelemente
  let nextSiblingLinks = $('div').nextAll('a');
  // Auswahl aller nächsten Geschwisterelemente bis zu bestimmtem Element
  let nextSiblingsUntil = $('div').nextUntil('a');
  // Auswahl des vorigen Geschwisterelements
  let previousSibling = $('ul').prev();
  // Auswahl aller vorigen Geschwisterelemente
  let previousSiblings = $('ul').prevAll();
  // Auswahl aller vorigen Geschwisterelemente bis zu bestimmtem Element
  let previousSiblingsUntil = $('div').prevUntil('a');
  // Auswahl aller Geschwisterelemente
  let siblings = $('div').siblings();
  // Elternelemente
  // Auswahl des Elternelements
  let parent = $('ul').parent();
  // Auswahl aller Vorfahrenelemente
  let parents = $('ul').parents();
  // Auswahl aller Vorfahrenelemente bis zu bestimmtem Element
  let parentsUntil = $('ul').parentsUntil('div');
});