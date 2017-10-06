'use strict';
let todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
let sliced1 = todoList.slice(1);    // ab zweitem Element
let sliced2 = todoList.slice(2);    // ab drittem Element
let sliced3 = todoList.slice(0, 2); // erstes und zweites Element
let sliced4 = todoList.slice(2, 4); // drittes und viertes Element
console.log(sliced1);   // ["Einkaufen", "Aufräumen", "Rasen mähen"]
console.log(sliced2);   // ["Aufräumen", "Rasen mähen"]
console.log(sliced3);   // ["Bad putzen", "Einkaufen"]
console.log(sliced4);   // ["Aufräumen", "Rasen mähen"]
console.log(todoList);  // ["Bad putzen", "Einkaufen", "Aufräumen", "Rasen mähen"]