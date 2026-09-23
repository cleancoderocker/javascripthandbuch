'use strict';
const todoList = [];
let length;
length = todoList.unshift('Clean bathroom');
console.log(length);   // 1
length = todoList.unshift('Go shopping');
console.log(length);   // 2
length = todoList.unshift('Tidy up', 'Mow lawn');
console.log(length);   // 4
console.log(todoList); // ["Tidy up", "Mow lawn", "Go shopping", "Clean bathroom"]
