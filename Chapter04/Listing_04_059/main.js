'use strict';
const todoList = [
  'Clean bathroom',
  'Go shopping',
  'Tidy up',
  'Mow lawn'
];
todoList.splice(
  2,                  // Index from which to insert elements
  0,                  // Number of elements to be deleted
  'Paint garage'      // Element to be added
);
console.log(todoList);
// [
//   "Clean bathroom",
//   "Go shopping",
//   "Paint garage",
//   "Tidy up",
//   "Mow lawn"
// ]
todoList.splice(
  2,                          // Index from which to insert elements
  0,                          // Number of elements to be deleted
  'Lay sod',                  // Elements to be ...
  'Lay out vegetable garden'  // ... added
);
console.log(todoList);
// [
//   "Clean bathroom",
//   "Go shopping",
//   "Lay sod",
//   "Lay out vegetable garden",
//   "Paint garage",
//   "Tidy up",
//   "Mow lawn"
// ]
