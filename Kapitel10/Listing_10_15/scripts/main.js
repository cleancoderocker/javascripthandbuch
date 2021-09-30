'use strict';
$(document).ready(() => {
  // Kindelemente
  // Auswahl aller Kindelemente von <ul>
  const listItems = $('ul').children();
  // Auswahl des nächsten Links innerhalb von <ul>
  const closestLink = $('ul').closest('a');
  // Geschwisterelemente
  // Auswahl des nächsten Geschwisterelements
  const nextSibling = $('ul').next();
  // Auswahl des nächsten Linkelements
  const nextSiblingLink = $('ul').next('a');
  // Auswahl aller nächsten Geschwisterelemente
  const nextSiblings = $('ul').nextAll();
  // Auswahl aller nächsten Linkelemente
  const nextSiblingLinks = $('div').nextAll('a');
  // Auswahl aller nächsten Geschwisterelemente bis zu bestimmtem Element
  const nextSiblingsUntil = $('div').nextUntil('a');
  // Auswahl des vorherigen Geschwisterelements
  const previousSibling = $('ul').prev();
  // Auswahl aller vorherigen Geschwisterelemente
  const previousSiblings = $('ul').prevAll();
  // Auswahl aller vorherigen Geschwisterelemente bis zu bestimmtem Element
  const previousSiblingsUntil = $('div').prevUntil('a');  
  // Auswahl aller Geschwisterelemente
  const siblings = $('div').siblings();
  // Elternelemente
  // Auswahl des Elternelements
  const parent = $('ul').parent();
  // Auswahl aller Vorfahrenelemente
  const parents = $('ul').parents();
  // Auswahl aller Vorfahrenelemente bis zu bestimmtem Element
  const parentsUntil = $('ul').parentsUntil('div');
});