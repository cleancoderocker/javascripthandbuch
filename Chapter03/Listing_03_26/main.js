'use strict';
const name = 'John Doe';
const age = 44;
function getName() {
  return name;
}
const message = `My name is ${getName()}, I am twice the age of ${age/2}.`;
console.log(message); 
// "My name is John Doe, I am twice the age of 22." 
