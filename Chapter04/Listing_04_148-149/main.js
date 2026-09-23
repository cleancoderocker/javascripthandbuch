'use strict';
const text = 'The private phone number is +49 30 1234567,' +
  ' the business phone number is +49 30 1234568.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
let result;
while ((result = regExp.exec(text)) !== null) {
  console.log(
    'Number ' + result[0]
    + ' found at index ' + result.index
    + '.'
  );
}
