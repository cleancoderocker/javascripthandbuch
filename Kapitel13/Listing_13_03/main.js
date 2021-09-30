'use strict';
const animal = {
  name: 'default',
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
cat.eat('Katzenfutter'); // Ausgabe: 'Mmpf mmpf, Katzenfutter!'
cat.drink('Milch'); // Ausgabe: 'Mmmmmmh, Milch!'
cat.meow(); // Ausgabe: 'Miauuuuuu!'
console.log(cat.color); // Ausgabe: 'Braun'
const dog = Object.create(animal);
dog.bark = function() {
  console.log('Wuff wuff!');
}
dog.eat('Fleisch'); // Ausgabe: 'Mmpf mmpf, Fleisch!'
dog.drink('Wasser'); // Ausgabe: 'Mmmmmmh, Wasser!'
dog.bark(); // Ausgabe: 'Wuff wuff!'
console.log(dog.color); // Ausgabe: 'Braun'