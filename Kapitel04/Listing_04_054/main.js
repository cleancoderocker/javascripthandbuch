'use strict';
const todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
const item1 = todoList.pop();
console.log(item1); // Ausgabe: Rasen mähen
const item2 = todoList.pop();
console.log(item2); // Ausgabe: Aufräumen
const item3 = todoList.pop();
console.log(item3); // Ausgabe: Einkaufen
const item4 = todoList.pop();
console.log(item4); // Ausgabe: Bad putzen
const item5 = todoList.pop();
console.log(item5); // Ausgabe: undefined