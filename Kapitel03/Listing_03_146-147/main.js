'use strict';
function tagFunction(strings, ...replacements) {
  const name = replacements[0]; // "Max Mustermann"
  const age = replacements[1];  // 44 bzw. 88
  if (age > 80) {
    return `${strings[0]}${replacements[0]}.`;
    // --> "Mein Name ist Max Mustermann."
  }
  return `${strings[0]}${name}${strings[1]}${age}${strings[2]}.`;
  // --> "Mein Name ist Max Mustermann, ich bin 44 Jahre alt."
}

const name = 'Max Mustermann';
let age = 44;

let message = tagFunction`Mein Name ist ${name}, ich bin ${age} Jahre alt`;
console.log(message);
// Mein Name ist Max Mustermann, ich bin 44 Jahre alt.

age = 88;
message = tagFunction`Mein Name ist ${name}, ich bin ${age} Jahre alt`;
console.log(message);
// Mein Name ist Max Mustermann


