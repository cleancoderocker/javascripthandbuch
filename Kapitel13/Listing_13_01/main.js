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
let dog = Object.create(animal);