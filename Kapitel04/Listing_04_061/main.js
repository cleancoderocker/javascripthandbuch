'use strict';
const todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
const deletedTodos = todoList.splice(1, 2);
console.log(deletedTodos);  // ["Einkaufen", "Aufräumen"]
console.log(todoList);      // ["Bad putzen", "Rasen mähen"]