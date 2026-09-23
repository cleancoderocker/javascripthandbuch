'use strict';
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
const fish = new Animal('Fishy', 'Green', 2);
console.log(fish.name);   // Output: "Fishy"
console.log(fish.color);  // Output: "Green"
console.log(fish.age);    // Output: 2
