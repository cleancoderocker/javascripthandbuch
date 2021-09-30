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
const cat = Object.create(animal); // Objekte erben ...
cat.eat('Katzenfutter'); // ... Methoden ...
cat.drink('Milch');
console.log(cat.color); // ... und Eigenschaften vom Prototyp.
const dog = Object.create(animal);
dog.eat('Fleisch'); // Ausgabe: 'Mmpf mmpf, Fleisch!'
dog.drink('Wasser'); // Ausgabe: 'Mmmmmmh, Wasser!'
console.log(dog.color); // Ausgabe: 'Braun'