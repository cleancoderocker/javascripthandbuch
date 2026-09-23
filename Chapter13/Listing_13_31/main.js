'use strict';
class Animal {

  _name = 'John Sample Fish';
  _color = 'Gold';
  _age = '25';
 
  constructor(name, color, age) {
    this._name = name ? name : this._name;
    this._color = color ? color : this._color;
    this._age = age ? age : this._age;
  }

  static getAnimalColors() {
    return { 
      WHITE: 'White',
      BLACK: 'Black',
      BROWN: 'Brown', 
      GREEN: 'Green',
      YELLOW: 'Yellow',
      ORANGE: 'Orange'
    }
  }
 
}

console.log(Animal.getAnimalColors());
// {
//   WHITE: 'White',
//   BLACK: 'Black',
//   BROWN: 'Brown',
//   GREEN: 'Green',
//   YELLOW: 'Yellow',
//   ORANGE: 'Orange'
// }
const bird = new Animal('Birdie', Animal.getAnimalColors().BLACK, 5);
console.log(bird.name);  // "Birdie"
console.log(bird.color); // "Black"
console.log(bird.age);   // 5
// console.log(bird.getAnimalColors()); // error because method is static
