'use strict';
const todoList = [
  'Clean bathroom',
  'Go shopping',
  'Tidy up',
  'Mow lawn'
];
const sliced5 = todoList.slice(-2);     // the last two elements
const sliced6 = todoList.slice(1,       // the second element from the beginning to ...
                            -1);        // ... the second element from the end
const sliced7 = todoList.slice(1,       // the second element from the beginning to ...
                            -2);        // ... the third element from the end
const sliced8 = todoList.slice(1,       // the second element from the beginning to ...
                            -3);        // ... the fourth element from the end
console.log(sliced5);                   // ["Tidy up", "Mow lawn"]
console.log(sliced6);                   // ["Go shopping", "Tidy up"]
console.log(sliced7);                   // ["Go shopping"]
console.log(sliced8);                   // []
