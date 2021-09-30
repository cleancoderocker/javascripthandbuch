'use strict';
const todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
const item1 = todoList.shift();
console.log(item1); // Ausgabe: Bad putzen
const item2 = todoList.shift();
console.log(item2); // Ausgabe: Einkaufen
const item3 = todoList.shift();
console.log(item3); // Ausgabe: Aufräumen
const item4 = todoList.shift();
console.log(item4); // Ausgabe: Rasen mähen
const item5 = todoList.shift();
console.log(item5); // Ausgabe: undefined