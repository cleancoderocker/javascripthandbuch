'use strict';
class Animal {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  eat(food) {
    console.log('Mmpf mmpf, ' + food);
  }
  drink(drink) {
    console.log('Mmmmmmh, ' + drink);
  }
  toString() {
    return this.name + ', ' + this.color + ', ' + this.age;
  }
}

let fish = new Animal('Fischi', 'Grün', 2);
fish.eat('Algen');
console.log(fish.toString()); // Ausgabe: "Fischi, Grün, 2"