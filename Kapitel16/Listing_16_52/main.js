'use strict';
const name = 'Max Mustermann';
const age = 44;
const message = tagFunction'Mein Name ist ${name}, ich bin ${age} Jahre alt';
console.log(message); // Mein Name ist Max Mustermann, ich bin 44 Jahre alt.
age = 88;
message = tagFunction'Mein Name ist ${name}, ich bin ${age} Jahre alt';
console.log(message); // Mein Name ist Max Mustermann
function tagFunction(strings, ...replacements) {
  const name = replacements[0];
  const age = replacements[1];
  if(age > 80) {
    return `${strings[0]}${replacements[0]}`;
  }
  return `${strings[0]}${name}${strings[1]}${age}${strings[2]}`;
}