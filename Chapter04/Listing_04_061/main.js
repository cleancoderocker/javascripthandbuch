'use strict';
const todoList = [
  'Clean bathroom',
  'Go shopping',
  'Tidy up',
  'Mow lawn'
];
const item1 = todoList.shift();
console.log(item1);             // Output: Clean bathroom
const item2 = todoList.shift();
console.log(item2);             // Output: Go shopping
const item3 = todoList.shift();
console.log(item3);             // Output: Tidy up
const item4 = todoList.shift();
console.log(item4);             // Output: Mow lawn
const item5 = todoList.shift();
console.log(item5);             // Output: undefined
