'use strict';
const todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
todoList.copyWithin(
  0, // Zielstartposition, an die die Elemente kopiert werden
  2, // Quellenstartposition, ab der kopiert wird
  4   // Quellenendposition, bis zu der kopiert wird
);
console.log(todoList);
// ["Aufräumen", "Rasen mähen", "Aufräumen", "Rasen mähen"]