'use strict';
const animal = {
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
const cat = Object.create(animal);
cat.meow = function() {
  console.log('Miauuuuuu!');
}
const dog = Object.create(animal);
dog.bark = function() {
  console.log('Wuff wuff!');
}
const vegetarianDog = Object.create(dog);
vegetarianDog.eat = function(food) {
  if(food.indexOf('Fleisch') >= 0 || food.indexOf('fleisch') >= 0) {
    throw new Error('Ich esse doch kein Fleisch!');
  } else {
    console.log('Mmpf mmpf, ' + food + '!');
  }
}
vegetarianDog.eat('Käse'); // vorhanden in vegetarionDog
vegetarianDog.bark(); // vorhanden in dog
vegetarianDog.drink('Wasser'); // vorhanden in animal
vegetarianDog.toString(); // vorhanden in Object