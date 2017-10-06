'use strict';
let todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
let item1 = todoList.shift();
console.log(item1); // Ausgabe: Bad putzen
let item2 = todoList.shift();
console.log(item2); // Ausgabe: Einkaufen
let item3 = todoList.shift();
console.log(item3); // Ausgabe: Aufräumen
let item4 = todoList.shift();
console.log(item4); // Ausgabe: Rasen mähen
let item5 = todoList.shift();
console.log(item5); // Ausgabe: undefined