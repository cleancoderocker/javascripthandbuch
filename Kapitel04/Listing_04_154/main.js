'use strict';
let text = 'Die private Telefonnummer lautet +49 30 1234567,' +
  ' die geschäftliche Telefonnummer lautet +49 30 1234568.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
text = text.replace(regExp, function(number) {
  return number.substring(0, 9) + 'XXXXX';
});
console.log(text);
// Die private Telefonnummer lautet +49 30 12XXXXX,
// die geschäftliche Telefonnummer lautet +49 30 12XXXXX.