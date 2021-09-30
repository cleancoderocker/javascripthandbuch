'use strict';
const todoList = [];
let length;
length = todoList.push('Bad putzen');
console.log(length);  // 1
length = todoList.push('Einkaufen');
console.log(length);  // 2
length = todoList.push('Aufräumen', 'Rasen mähen');
console.log(length);  // 4
console.log(todoList); // ["Bad putzen", "Einkaufen", "Aufräumen", "Rasen mähen"]