'use strict';
let todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
let item1 = todoList.pop();
console.log(item1); // Ausgabe: Rasen mähen
let item2 = todoList.pop();
console.log(item2); // Ausgabe: Aufräumen
let item3 = todoList.pop();
console.log(item3); // Ausgabe: Einkaufen
let item4 = todoList.pop();
console.log(item4); // Ausgabe: Bad putzen
let item5 = todoList.pop();
console.log(item5); // Ausgabe: undefined