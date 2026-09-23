'use strict';
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};

function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
};
function VegetarianDog(name, color, age, type) {
  Dog.call(this, name, color, age);
  this.type = type;
};

VegetarianDog.prototype.eat = function(food) {
  if(food.indexOf('meat') >= 0 || food.indexOf('meat') >= 0) {
    throw new Error('I don`t eat meat!');
  } else {
    console.log('Chow chow, ' + food);
  }
} 
