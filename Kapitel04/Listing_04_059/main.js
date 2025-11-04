'use strict';
const todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
todoList.splice(
  2,                    // Index, ab dem eingefügt werden soll
  0,                    // Anzahl an zu löschenden ELementen
  'Garage streichen'    // Element, das hinzugefügt werden soll
);
console.log(todoList);
// [
// "Bad putzen",
// "Einkaufen",
// "Garage streichen",
// "Aufräumen",
// "Rasen mähen"
// ]
todoList.splice(
  2,                    // Index, ab dem eingefügt werden soll
  0,                    // Anzahl an zu löschenden ELementen
  'Rollrasen verlegen', // Elemente, die hinzugefügt ...
  'Gemüsebeet anlegen'  // ... werden sollen
);
console.log(todoList);
// [
// "Bad putzen",
// "Einkaufen",
// "Rollrasen verlegen",
// "Gemüsebeet anlegen",
// "Garage streichen",
// "Aufräumen",
// "Rasen mähen"
// ]