'use strict';
const animal = {
  name: '',
  color: 'Brown',
  age: 0,
  eat: function(food) {
    console.log('Chow chow, ' + food + '!');
  },
  drink: function(drink) {
    console.log('Mmmmmmh, ' + drink + '!');
  }
}
const cat = Object.create(animal);
cat.meow = function() {
  console.log('Meowwwww!');
}
const dog = Object.create(animal);
dog.bark = function() {
  console.log('Woof woof!');
}
const vegetarianDog = Object.create(dog);
vegetarianDog.eat = function(food) {
  if(food.indexOf('meat') >= 0 || food.indexOf('meat') >= 0) {
    throw new Error('I don`t eat meat!');
  } else {
    this.__proto__.eat.call(this, food);
  }
}
vegetarianDog.eat('cheese');
