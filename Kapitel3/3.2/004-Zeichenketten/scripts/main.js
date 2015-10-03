function init() {
  var firstName = 'Max';        // Einfache Anführungszeichen
  var lastName = "Mustermann";  // Doppelte Anführungszeichen
  var age = "22";               // Keine Zahl, sondern Zeichenkette
  // var street = 'Musterstraße";  // Syntaxfehler: Mischform

  var message1 = 'Ihr Name lautet "Max Mustermann"';
  var message2 = "Ihr Name lautet 'Max Mustermann'";
  var message3 = 'Ihr Name lautet \'Max Mustermann\'';
  var message4 = "Ihr Name lautet \"Max Mustermann\"";
  console.log(message1);  // Ausgabe: Ihr Name lautet "Max Mustermann"
  console.log(message2);  // Ausgabe: Ihr Name lautet 'Max Mustermann'
  console.log(message3);  // Ausgabe: Ihr Name lautet 'Max Mustermann'
  console.log(message4);  // Ausgabe: Ihr Name lautet "Max Mustermann"
}

document.addEventListener('DOMContentLoaded', init);