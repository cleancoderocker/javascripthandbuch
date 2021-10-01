'use strict';
const todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
const sliced5 = todoList.slice(-2);   // die letzten beiden Elemente
const sliced6 = todoList.slice(1,     // zweites Element von vorne bis ...
  -1);                                // ... zweites Element von hinten
const sliced7 = todoList.slice(1,     // zweites Element von vorne bis ...
  -2);                                // ... bis drittes Element von hinten
const sliced8 = todoList.slice(1,     // zweites Element von vorne bis ...
  -3);                                // ... viertes Element von hinten
console.log(sliced5);                 // ["Aufräumen", "Rasen mähen"]
console.log(sliced6);                 // ["Einkaufen", "Aufräumen"]
console.log(sliced7);                 // ["Einkaufen"]
console.log(sliced8);                 // []