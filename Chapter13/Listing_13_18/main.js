'use strict';
const AnimalClass = class Animal {

  name = 'John Sample Fish';
  color = 'Gold';
  age = '25';

  constructor(name, color, age) {
    this.name = name ? name : this.name;
    this.color = color ? color : this.color;
    this.age = age ? age : this.age;
  }

  eat(food) {
    console.log(`Chow chow, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }
  
  toString() {
    return `${this.name}, ${this.color}, ${this.age}`;
  }

}
