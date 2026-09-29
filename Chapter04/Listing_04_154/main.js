'use strict';
let text = 'The private phone number is +49 30 1234567,' +
          ' the business phone number is +49 30 1234568.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
text = text.replace(regExp, '<number hidden>');
console.log(text);
// The private phone number is <number hidden>,
// the business phone number is <number hidden>.
