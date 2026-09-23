'use strict';

class Animal {
 
  _name = 'John Sample Fish';
  _color = 'Gold';
  _age = '25';
 
  static ANIMAL_COLORS = {
    WHITE: 'White',
    BLACK: 'Black',
    BROWN: 'Brown',
    GREEN: 'Green',
    YELLOW: 'Yellow',
    ORANGE: 'Orange'
  }
 
  constructor(name, color, age) {
    this._name = name ? name : this._name;
    this._color = color ? color : this._color;
    this._age = age ? age : this._age;
  }
 
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
