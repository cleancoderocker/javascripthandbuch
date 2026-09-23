'use strict';
const todoList = [
  'Clean bathroom',
  'Go shopping',
  'Tidy up',
  'Mow lawn'
];
todoList.copyWithin(
  0,  // target start position to which the elements will be copied
  2,  // source start position from which the elements are copied
  4   // source end position up to which the elements are copied
);
console.log(todoList);
// ["Tidy up", "Mow lawn", "Tidy up", "Mow lawn"]
