'use strict';
let text = 'The private phone number is +49 30 1234567,' +
  ' the business phone number is +49 30 1234568.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
text = text.replace(regExp, function(number) {
  return number.substring(0, 9) + 'XXXXX';
});
console.log(text);
// The private phone number is +49 30 12XXXXX,
// the business phone number is +49 30 12XXXXX.
