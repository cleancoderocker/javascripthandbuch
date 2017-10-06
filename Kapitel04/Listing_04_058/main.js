'use strict';
let todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
let sliced5 = todoList.slice(-2);   // die letzten beiden Elemente
let sliced6 = todoList.slice(1,     // zweites Element von vorne bis ...
  -1);                              // ... zweites Element von hinten
let sliced7 = todoList.slice(1,     // zweites Element von vorne bis ...
  -2);                              // ... bis drittes Element von hinten
let sliced8 = todoList.slice(1,     // zweites Element von vorne bis ...
  -3);                              // ... viertes Element von hinten
console.log(sliced5);               // ["Aufräumen", "Rasen mähen"]
console.log(sliced6);               // ["Einkaufen", "Aufräumen"]
console.log(sliced7);               // ["Einkaufen"]
console.log(sliced8);               // []