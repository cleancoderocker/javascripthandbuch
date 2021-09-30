'use strict';
const age = prompt('Für welches Alter suchen Sie Filmtipps?');
if(!isNaN(parseFloat(age)) && isFinite(age)) {
  if(age >= 18) {
    console.log('Filme mit FSK6, FSK12, FSK16 und FSK18 anzeigen.');
  } else if(age >= 16) {
    console.log('Filme mit FSK6, FSK12 und FSK16 anzeigen.');
  } else if(age >= 12) {
    console.log('Filme mit FSK6 und FSK12 anzeigen.');
  } else if(age >= 6) {
    console.log('Filme mit FSK6 anzeigen.');
  }
} else {
  console.error('Ungültiges Alter eingegeben.');
}