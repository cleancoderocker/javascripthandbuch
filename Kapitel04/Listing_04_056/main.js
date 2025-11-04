'use strict';
const todoList = [
  'Bad putzen',           // Element an Index 0
  'Einkaufen',            // Element an Index 1
  'Aufräumen',            // Element an Index 2
  'Rasen mähen'           // Element an Index 3
];
console.log(todoList.at(0));  // "Bad putzen"
console.log(todoList.at(1));  // "Einkaufen"
console.log(todoList.at(2));  // "Aufräumen"
console.log(todoList.at(3));  // "Rasen mähen"
console.log(todoList.at(4));  // undefined
console.log(todoList.at(-1)); // "Rasen mähen"
console.log(todoList.at(-2)); // "Einkaufen"
console.log(todoList.at(-3));  // "Aufräumen"
console.log(todoList.at(-4));  // "Bad putzen"
console.log(todoList.at(-5));  // undefined