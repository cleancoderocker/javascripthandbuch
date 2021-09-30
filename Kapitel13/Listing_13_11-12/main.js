'use strict';
// Schritt 1
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
// Schritt 2
Animal.prototype.eat = function(food) {
  console.log('Mmpf mmpf, ' + food);
}
Animal.prototype.drink = function(drink) {
  console.log('Mmmmmmh, ' + drink);
}
// Schritt 3
function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
};
// Schritt 4
Dog.prototype = new Animal();
// Schritt 5
Dog.prototype.constructor = Dog;
// Schritt 6
Dog.prototype.bark = function() {
  console.log('Wuff wuff');
}
const bello = new Dog('Bello', 'Weiß', 2, 'Malteser');
bello.bark(); // Ausgabe: "Wuff wuff"