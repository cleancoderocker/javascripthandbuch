'use strict';
const todoList = [
  'Clean bathroom',
  'Go shopping',
  'Tidy up',
  'Mow lawn'
];
const deletedTodos = todoList.splice(1, 2);
console.log(deletedTodos);                // ["Go shopping", "Tidy up"]
console.log(todoList);                    // ["Clean bathroom", "Mow lawn"]
