'use strict';
// Kein Best Practice: boolesche Bedingungen innerhalb einer switch-Anweisung
const age = prompt('Für welches Alter suchen Sie Filmtipps?');
switch(true) {
  case (age >= 18):
    console.log('Filme mit FSK6, FSK12, FSK16 und FSK18 anzeigen.');
    break;
  case (age >= 16):
    console.log('Filme mit FSK6, FSK12 und FSK16 anzeigen.');
    break;
  case (age >= 12):
    console.log('Filme mit FSK6 und FSK12 anzeigen.');
    break;
  case (age >= 6):
    console.log('Filme mit FSK6 anzeigen.');
    break;
}