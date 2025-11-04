'use strict';
const todoList = [
  'Bad putzen',
  'Einkaufen',
  'Aufräumen',
  'Rasen mähen'
];
const sliced1 = todoList.slice(1);    // ab zweitem Element
console.log(sliced1);   // ["Einkaufen", "Aufräumen", "Rasen mähen"]

const sliced2 = todoList.slice(2);    // ab drittem Element
console.log(sliced2);   // ["Aufräumen", "Rasen mähen"]

const sliced3 = todoList.slice(0, 2); // erstes und zweites Element
console.log(sliced3);   // ["Bad putzen", "Einkaufen"]

const sliced4 = todoList.slice(2, 4); // drittes und viertes Element
console.log(sliced4);   // ["Aufräumen", "Rasen mähen"]

// Ursprungs-Array bleibt unverändert:
console.log(todoList);  // ["Bad putzen", "Einkaufen", "Aufräumen", "Rasen mähen"]