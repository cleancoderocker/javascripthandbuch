'use strict';
const todoList = [
  'Clean bathroom',
  'Go shopping',
  'Tidy up',
  'Mow lawn'
];
const item1 = todoList.pop();
console.log(item1);             // Output: Mow lawn
const item2 = todoList.pop();
console.log(item2);             // Output: Tidy up
const item3 = todoList.pop();
console.log(item3);             // Output: Go shopping
const item4 = todoList.pop();
console.log(item4);             // Output: Clean bathroom
const item5 = todoList.pop();
console.log(item5);             // Output: undefined
