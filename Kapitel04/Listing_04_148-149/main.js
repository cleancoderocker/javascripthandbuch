'use strict';
const text = 'Die private Telefonnummer lautet +49 30 1234567,' +
  ' die geschäftliche Telefonnummer lautet +49 30 1234568.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
let result;
while ((result = regExp.exec(text)) !== null) {
  console.log(
    'Nummer ' + result[0]
    + ' gefunden an Index ' + result.index
    + '.'
  );
}