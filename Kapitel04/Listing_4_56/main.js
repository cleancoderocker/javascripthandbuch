'use strict';
let todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
let deletedTodos = todoList.splice(1, 2);
console.log(deletedTodos);  // ["Einkaufen", "Aufräumen"]
console.log(todoList);      // ["Bad putzen", "Rasen mähen"]