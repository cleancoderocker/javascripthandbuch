'use strict';
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
Animal.prototype.eat = function(food) {
  console.log(`Mmpf mmpf, ${food}!`);
}
Animal.prototype.drink = function(drink) {
  console.log(`Mmmmmmh, ${drink}!`);
}
function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
};
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log('Wuff wuff');
}
const bello = new Dog('Bello', 'white', 2, 'Malteser');
bello.bark(); // Output: "Wuff wuff"

function VegetarianDog(name, color, age, type) {
  Dog.call(this, name, color, age);
  this.type = type;
};
VegetarianDog.prototype.eat = function(food) {
  if(food.indexOf('meat') >= 0 || food.indexOf('meat') >= 0) {
    throw new Error('I do not eat meat!');
  } else {
    console.log(`Mmpf mmpf, ${food}!`);
  }
}
