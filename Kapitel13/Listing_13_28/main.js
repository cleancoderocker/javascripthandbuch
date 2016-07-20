'use strict';
class Animal {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  static getAnimalColors() {
    return {
      WHITE: 'Weiß',
      BLACK: 'Schwarz',
      BROWN: 'Braun',
      GREEN: 'Grün',
      YELLOW: 'Gelb',
      ORANGE: 'Orange'
    }
  }
  eat(food) {
    console.log('Mmpf mmpf, ' + food);
  }
  drink(drink) {
    console.log('Mmmmmmh, ' + drink);
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
}
Animal.ANIMAL_COLORS = {
  WHITE: 'Weiß',
  BLACK: 'Schwarz',
  BROWN: 'Braun',
  GREEN: 'Grün',
  YELLOW: 'Gelb',
  ORANGE: 'Orange'
}
console.log(Animal.ANIMAL_COLORS);
let bird = new Animal('Birdie', Animal.ANIMAL_COLORS.BLACK, 5);
console.log(bird.name);   // "Birdie"
console.log(bird.color);  // "Schwarz"
console.log(bird.age);    // 5
// console.log(bird.ANIMAL_COLORS); // undefined