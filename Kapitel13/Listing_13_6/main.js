'use strict';
let animal = {
  name: '',
  color: 'Braun',
  age: 0,
  eat: function(food) {
    console.log('Mmpf mmpf, ' + food + '!');
  },
  drink: function(drink) {
    console.log('Mmmmmmh, ' + drink + '!');
  }
}
let cat = Object.create(animal);
cat.meow = function() {
  console.log('Miauuuuuu!');
}
let dog = Object.create(animal);
dog.bark = function() {
  console.log('Wuff wuff!');
}
let vegetarianDog = Object.create(dog);
vegetarianDog.eat = function(food) {
  if(food.indexOf('Fleisch') >= 0 || food.indexOf('fleisch') >= 0) {
    throw new Error('Ich esse doch kein Fleisch!');
  } else {
    this.__proto__.eat.call(this, food);
  }
}
vegetarianDog.eat('Käse');