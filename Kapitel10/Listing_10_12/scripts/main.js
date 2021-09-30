'use strict';
$(document).ready(() => {
  // Auswahl des dritten <li>-Elements
  $('li').eq(2);
  // Auswahl des ersten <li>-Elements
  $('li').first();
  // Auswahl der <li>-Elemente, die die CSS-Klasse ".selected" haben
  $('li').filter('.selected');
  // Auswahl aller <li>-Elemente, die ein <ul>-Element enthalten
  $('li').has('ul');
  // Auswahl aller Elemente, die die CSS-Klasse ".selected" haben
  $('li').has('.selected');
  // Auswahl des letzten <li>-Elements
  $('li').last();
  // Auswahl aller class-Attribute der <li>-Elemente
  $('li').map(() => { this.className });
  // Auswahl aller <li>-Elemente, die nicht die CSS-Klasse ".selected" haben
  $('li').not('.selected');
  // Auswahl der ersten zwei <li>-Elemente
  $('li').slice(0, 2);
});