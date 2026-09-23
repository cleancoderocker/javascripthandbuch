'use strict';
class Animal {

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
  
  toString() {
    return `${this._name}, ${this._color}, ${this._age}`;
  }

}

Animal.ANIMAL_COLORS = { 
  WHITE: 'White',
  BLACK: 'Black',
  BROWN: 'Brown', 
  GREEN: 'Green',
  YELLOW: 'Yellow',
  ORANGE: 'Orange'
}
console.log(Animal.ANIMAL_COLORS);
// {
//   WHITE: 'White',
//   BLACK: 'Black',
//   BROWN: 'Brown',
//   GREEN: 'Green',
//   YELLOW: 'Yellow',
//   ORANGE: 'Orange'
// }
const bird = new Animal('Birdie', Animal.ANIMAL_COLORS.BLACK, 5);
console.log(bird.name);  // "Birdie"
console.log(bird.color); // "Black"
console.log(bird.age);   // 5
// console.log(bird.ANIMAL_COLORS); // undefined
