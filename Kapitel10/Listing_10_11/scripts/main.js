'use strict';
$(document).ready(() => {
  // Hinzufügen von neuem HTML-Inhalt
  $('#main').html('<div>Neuer Inhalt</div>');
  // Zugriff auf den HTML-Inhalt
  const htmlContent = $('#main').html();
  // Hinzufügen von neuem Textinhalt
  $('#main').text('Neuer Textinhalt');
  // Zugriff auf den Textinhalt
  const textContent = $('#main').text();
  // Hinzufügen von neuem Inhalt hinter den
  // bestehenden Inhalt jedes <div>-Elements
  // mit der CSS-Klasse "example"
  $('div.example').append('<p>Beispiel</p>');
  // Hinzufügen von neuem Inhalt vor den
  // bestehenden Inhalt jedes <div>-Elements
  // mit der CSS-Klasse "example"
  $('div.example').prepend('<p>Beispiel</p>');
  // Hinzufügen von neuem Inhalt hinter jedes
  // <div>-Element mit der CSS-Klasse "example"
  $('div.example').after('<p>Beispiel</p>');
  // Hinzufügen von neuem Inhalt vor jedes
  // <div>-Element mit der CSS-Klasse "example"
  $('div.example').before('<p>Beispiel</p>');
});