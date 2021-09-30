'use strict';
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
Animal.prototype.eat = function(food) {
  console.log('Mmpf mmpf, ' + food);
}
Animal.prototype.drink = function(drink) {
  console.log('Mmmmmmh, ' + drink);
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
const bello = new Dog('Bello', 'Weiß', 2, 'Malteser');
bello.bark(); // Ausgabe: "Wuff wuff"

function VegetarianDog(name, color, age, type) {
  Dog.call(this, name, color, age);
  this.type = type;
};
VegetarianDog.prototype.eat = function(food) {
  if(food.indexOf('Fleisch') >= 0 || food.indexOf('fleisch') >= 0) {
    throw new Error('Ich esse doch kein Fleisch!');
  } else {
    console.log('Mmpf mmpf, ' + food);
  }
}