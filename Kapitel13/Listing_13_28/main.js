'use strict';
class Animal {

  _name = 'Max Musterfisch';
  _color = 'Gold';
  _age = '25';

  static ANIMAL_COLORS = {
    WHITE: 'Weiß',
    BLACK: 'Schwarz',
    BROWN: 'Braun',
    GREEN: 'Grün',
    YELLOW: 'Gelb',
    ORANGE: 'Orange'
  }

  constructor(name, color, age) {
    this._name = name ? name : this._name;
    this._color = color ? color : this._color;
    this._age = age ? age : this._age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  eat(food) {
    console.log(`Mmpf mmpf, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }

  toString() {
    return `${this._name}, ${this._color}, ${this._age}`;
  }

}

console.log(Animal.ANIMAL_COLORS);
// {
//   WHITE: 'Weiß',
//   BLACK: 'Schwarz',
//   BROWN: 'Braun',
//   GREEN: 'Grün',
//   YELLOW: 'Gelb',
//   ORANGE: 'Orange'
// }
const bird = new Animal('Birdie', Animal.ANIMAL_COLORS.BLACK, 5);
console.log(bird.name);   // "Birdie"
console.log(bird.color);  // "Schwarz"
console.log(bird.age);    // 5
// console.log(bird.ANIMAL_COLORS); // undefined