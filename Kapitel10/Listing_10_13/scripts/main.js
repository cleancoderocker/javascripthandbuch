'use strict';
$(document).ready(() => {
  const element = $('a#main');
  // lesender Zugriff auf das Attribut "href" des Elements
  const href = element.attr('href');
  // schreibender Zugriff auf das Attribut "href" des Elements
  element.attr('href', 'index.html');
  // alternativer schreibender Zugriff über Konfigurationsobjekt
  element.attr({
    href: 'index.html',
    target: '_blank'
  });
  // Enfernen des Attributs "href" aus dem Element
  element.removeAttr('href');
  // Hinzufügen einer CSS-Klasse
  element.addClass('highlighted');
  // Entfernen einer CSS-Klasse
  element.removeClass('highlighted');
});