'use strict';
const text = 'Die Telefonnummer lautet +49 30 1234567.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/;
const result = regExp.exec(text)
console.log(
  'Nummer ' + result[0]
  + ' gefunden an Index ' + result.index
  + '.'
);