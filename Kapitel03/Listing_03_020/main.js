'use strict';
const message1 = 'Ihr Name lautet "Max Mustermann"';
const message2 = "Ihr Name lautet 'Max Mustermann'";
const message3 = 'Ihr Name lautet \'Max Mustermann\'';
const message4 = "Ihr Name lautet \"Max Mustermann\"";
console.log(message1); // Ausgabe: Ihr Name lautet "Max Mustermann"
console.log(message2); // Ausgabe: Ihr Name lautet 'Max Mustermann'
console.log(message3); // Ausgabe: Ihr Name lautet 'Max Mustermann'
console.log(message4); // Ausgabe: Ihr Name lautet "Max Mustermann"