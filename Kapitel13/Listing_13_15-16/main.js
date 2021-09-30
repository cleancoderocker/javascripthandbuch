'use strict';
class Animal {

  name = 'Max Musterfisch';
  color = 'Gold';
  age = '25';

  constructor(name, color, age) {
      this.name = name ? name : this.name;
      this.color = color ? color : this.color;
      this.age = age ? age : this.age;
  }

  eat(food) {
    console.log(`Mmpf mmpf, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }

  toString() {
    return `${this.name}, ${this.color}, ${this.age}`;
  }

}

const defaultAnimal = new Animal();
console.log(defaultAnimal.toString()); // "Max Musterfisch, Gold, 25"

const fish = new Animal('Fischi', 'Grün', 2);
fish.eat('Algen');             // "Mmpf mmpf, Algen"
console.log(fish.toString());  // "Fischi, Grün, 2"