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
