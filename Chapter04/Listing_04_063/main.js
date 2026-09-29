'use strict';
const todoList = [
  'Clean bathroom',
  'Go shopping',
  'Tidy up',
  'Mow lawn'
];
const sliced1 = todoList.slice(1);    // starting from second element 
console.log(sliced1);                 // ["Go shopping", "Tidy up", Mow lawn"]

const sliced2 = todoList.slice(2);    // starting from third element 
console.log(sliced2);                 // ["Tidy up", "Mow lawn"]

const sliced3 = todoList.slice(0, 2); // first and second element 
console.log(sliced3);                 // ["Clean bathroom", "Go shopping"]

const sliced4 = todoList.slice(2, 4); // third and fourth element
console.log(sliced4);                 // ["Tidy up", "Mow lawn"]
 
// Original array remains unchanged:
console.log(todoList);  // ["Clean bathroom", "Go shopping", "Tidy up", "Mow lawn"]
