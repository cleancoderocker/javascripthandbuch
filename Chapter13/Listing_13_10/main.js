'use strict';
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
Animal.prototype.eat = function(food) {
  console.log('Chow chow, ' + food + '!');
}
Animal.prototype.drink = function(drink) {
  console.log('Mmmmmmh, ' + drink + '!');
}
const fish = new Animal('Fishy', 'Green', 2);
fish.eat('Algae');       // Output: 'Chow Chow, algae!'
fish.drink('water');     // Output: 'Mmmmmmh, water!'
