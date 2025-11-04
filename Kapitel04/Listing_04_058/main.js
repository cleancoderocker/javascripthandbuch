'use strict';
const todoList = [];
let length;
length = todoList.unshift('Bad putzen');
console.log(length);    // 1
length = todoList.unshift('Einkaufen');
console.log(length);    // 2
length = todoList.unshift('Aufräumen', 'Rasen mähen');
console.log(length);    // 4
console.log(todoList);  // ["Aufräumen", "Rasen mähen", "Einkaufen", "Bad putzen"]