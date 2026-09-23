'use strict';
// Step 1
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
// Step 2
Animal.prototype.eat = function(food) {
  console.log('Chow chow, ' + food);
}
Animal.prototype.drink = function(drink) {
  console.log('Mmmmmmh, ' + drink);
}
// Step 3
function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
};
// Step 4
Dog.prototype = new Animal();
// Step 5
Dog.prototype.constructor = Dog;
// Step 6
Dog.prototype.bark = function() {
  console.log('Woof woof');
}
const bello = new Dog('Bello', 'White', 2, 'Maltese');
bello.bark();      // Output: "Woof woof"
