'use strict';
function counter(name) {
  let i=0;
  return function() {
    i++;
    console.log(name + ': ' + i);
  }
}
const counter1 = counter('Zähler 1'); // Erzeugen eines Zählers
counter1(); // Zähler 1: 1
counter1(); // Zähler 1: 2
const counter2 = counter('Zähler 2'); // Erzeugen eines Zählers
counter2(); // Zähler 2: 1
counter2(); // Zähler 2: 2