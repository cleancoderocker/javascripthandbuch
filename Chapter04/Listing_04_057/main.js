'use strict';
const todoList = [];
let length;
length = todoList.push('Clean bathroom');
console.log(length);   // 1
length = todoList.push('Go shopping');
console.log(length);   // 2
length = todoList.push('Tidy up', 'Mow lawn');
console.log(length);   // 4
console.log(todoList); // ["Clean bathroom", "Go shopping", "Tidy up", "Mow lawn"]
