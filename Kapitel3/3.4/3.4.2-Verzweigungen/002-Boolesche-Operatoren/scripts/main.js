(function() {
  var age = prompt('Für welches Alter suchen Sie Filmtipps?');
  if(age >= 6 && age < 12) {
    console.log('Alle Filme mit FSK6 anzeigen.');
  } else if(age >= 12 && age < 16) {
    console.log('Alle Filme mit FSK6 und FSK12 anzeigen.');
  } else if(age >= 16 && age < 18) {
    console.log('Alle Filme mit FSK6, FSK12 und FSK16 anzeigen.');
  } else if(age >= 18) {
    console.log('Alle Filme anzeigen.');
  }
})();