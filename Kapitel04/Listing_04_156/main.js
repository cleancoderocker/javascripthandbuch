'use strict';
const text = 'Dieser Text enthält eine Telefonnummer: +49 30 1234567';
const text2 = 'Dieser Text enthält keine Telefonnummer.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
console.log(text.search(regExp));   // Ausgabe: 40
console.log(text2.search(regExp));  // Ausgabe: -1