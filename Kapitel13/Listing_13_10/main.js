'use strict';
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
};
Animal.prototype.eat = function(food) {
  console.log('Mmpf mmpf, ' + food + '!');
}
Animal.prototype.drink = function(drink) {
  console.log('Mmmmmmh, ' + drink + '!');
}
const fish = new Animal('Fischi', 'Grün', 2);
fish.eat('Algen');    // Ausgabe: 'Mmpf mmpf, Algen!'
fish.drink('Wasser'); // Ausgabe: 'Mmmmmmh, Wasser!'